import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFetchGenresOfMoviesQuery, useFetchGenresOfTvListQuery } from '../../Services/GenresService';
import Ant from 'react-native-vector-icons/AntDesign';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainNavigatorStackParamList } from '../../navigators/types';
import { colors } from '../../styles/colors';
import { setIsGenresModalVisible } from '../../store/features/modals/genres/actions';
import { useActiveContent } from '../../store/features/activeContent/hooks';
import { GenreTypes } from '../../types/genres';
import { ActiveContent } from '../../types/activeContent';
import styles from './styles'
import { useLanguage } from '../../store/features/language/hooks';
import Error from '../errorAnimation';
import Loading from '../loading';





const GenresModal: React.FC = () => {


    const language = useLanguage()
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const [genres, setGenres] = useState<[GenreTypes] | []>([])
    const activeContent = useActiveContent()



    const { data: movieGenres, isLoading: movieGenresLoading, isError: movieGenresError } = useFetchGenresOfMoviesQuery(language, {
        skip: activeContent != ActiveContent.Movie
    })

    const { data: tvListData, isLoading: tvListLoading, isError: tvListError } = useFetchGenresOfTvListQuery(language, {
        skip: activeContent != ActiveContent.TVShow
    })

    useEffect(() => {
        if (activeContent == ActiveContent.Movie) {
            if (movieGenresError || movieGenresLoading) return;
            setGenres(movieGenres.genres)
        } else {
            if (tvListError || tvListLoading) return;
            setGenres(tvListData.genres)
        }
          
    }, [movieGenres, movieGenresError, movieGenresLoading, tvListLoading, tvListData, tvListError, activeContent])


    const handleCloseModal = () => setIsGenresModalVisible(false)


    const selectGenre = (genreid: string, genreName: string) => {

        navigation.navigate('ContentByGenreScreen', {
            genreid,
            value: genreName,
            activeContent: activeContent == ActiveContent.Movie ? ActiveContent.Movie : ActiveContent.TVShow
        })
        setIsGenresModalVisible(false)
    }



    if (activeContent == ActiveContent.Movie) {
        if (movieGenresError) return <Error />
        else if (movieGenresLoading) return <Loading />
    }

    else {
        if (tvListError) return <Error />
        else if (tvListLoading) return <Loading />
    }

 

    return (
        <Modal animationType="slide" transparent={true} >
            <ScrollView contentContainerStyle={styles.modalView}>

                {
                    genres.map(item => (
                        <TouchableOpacity key={item.id} style={styles.genre_button} activeOpacity={.8} onPress={() => selectGenre(String(item.id), item.name)}>
                            <Text style={styles.genre_text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }

                <TouchableOpacity onPress={handleCloseModal} >
                    <Ant name="close" color={colors.primary} size={24} />
                </TouchableOpacity>

            </ScrollView>
        </Modal>

    )
}

export default GenresModal


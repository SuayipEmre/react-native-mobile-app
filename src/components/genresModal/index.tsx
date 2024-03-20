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





const GenresModal: React.FC = () => {


    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const [genres, setGenres] = useState<[GenreTypes] | []>([])
    const activeContent = useActiveContent()

    const { data: movieGenres, isLoading: movieGenresLoading, isError: movieGenresError } = useFetchGenresOfMoviesQuery({}, {
        skip: activeContent != ActiveContent.Movie 
    })

    const { data: tvListData, isLoading: tvListLoading, isError: tvListError } = useFetchGenresOfTvListQuery({},{
        skip: activeContent != ActiveContent.TVShow 
    })

    useEffect(() => {
        if (activeContent == ActiveContent.Movie ) {
            if (!movieGenresLoading && !movieGenresError && movieGenres) {
                setGenres(movieGenres.genres)
            }
        } 

    }, [movieGenres, movieGenresError, movieGenresLoading])

    useEffect(() => {
        if (activeContent == ActiveContent.TVShow ){
            if (!tvListLoading && !tvListError && tvListData) {
                setGenres(tvListData.genres)
            }  
        }
    }, [tvListData, tvListLoading, tvListError])



    const handleCloseModal = () => setIsGenresModalVisible(false)


    const selectGenre = (genreid: string, genreName: string) => {

        navigation.navigate('ContentByGenreScreen', {
            genreid,
            value: genreName,
            activeContent : activeContent == ActiveContent.Movie ? ActiveContent.Movie : ActiveContent.TVShow
        })
        setIsGenresModalVisible(false)
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


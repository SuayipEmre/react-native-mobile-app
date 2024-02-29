import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { commonStyles } from '../../styles/commonStyle'
import { useFetchGenresOfMoviesQuery } from '../../store/features/APIs/genres';
import { setIsModalVisible } from '../../store/features/modals/movieGenres/actions';
import Ant from 'react-native-vector-icons/AntDesign';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeNavigatorStackParamList } from '../../navigators/types';






const GenresModal: React.FC = () => {

    
    const navigation = useNavigation<NavigationProp<HomeNavigatorStackParamList>>()

    const [genres, setGenres] = useState<[GenresTypes] | []>([])
    const { data, isLoading, isError } = useFetchGenresOfMoviesQuery({})

    useEffect(() => {
        if (!isLoading && !isError && data) {
            setGenres(data.genres)
        }
    }, [data, isError, isLoading])



    const handleCloseModal = () => setIsModalVisible(false)
    

    const selectGenre = (genreid : string, genreName:string) => {
        
        navigation.navigate('MoviesByGenreScreen', {
            genreid,
            value :genreName
        })
        setIsModalVisible(false)
    }

    return (
        <Modal animationType="slide" transparent={true}>
            <ScrollView contentContainerStyle={styles.modalView}>

                {
                    genres.map(item => (
                        <TouchableOpacity key={item.id} style={styles.genre_button} activeOpacity={.8} onPress={() => selectGenre(String(item.id), item.name)}>
                            <Text style={styles.genre_text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }

                <TouchableOpacity onPress={handleCloseModal} >
                    <Ant name="close" color='#fff' size={24} />
                </TouchableOpacity>

            </ScrollView>
        </Modal>

    )
}

export default GenresModal

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    modalView: {
        backgroundColor: '#000',
        shadowColor: '#fff',
        width: width,
        height: height,
        ...commonStyles.centerElements
    },
    genre_button: {
        marginBottom: 12,
    },
    genre_text: {
        fontSize: 20,
        color: '#fff',
    },

});
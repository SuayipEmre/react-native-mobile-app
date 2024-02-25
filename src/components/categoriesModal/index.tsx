import React, { useEffect, useState } from 'react';
import {  Modal, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { commonStyles } from '../../styles/commonStyle'
import { useFetchGenresOfMoviesQuery } from '../../store/features/APIs/genres';
import { CloseIcon } from '../../icons';


type CategoriesModalPropsType = {
    setModalVisible: (modalVisible: boolean) => void
}
const CategoriesModal: React.FC<CategoriesModalPropsType> = ({ setModalVisible }) => {
    const [genres, setGenres] = useState<[GenresTypes] | []>([])
    const { data, isLoading, isError } = useFetchGenresOfMoviesQuery({})

    useEffect(() => {
        if (!isLoading && !isError && data) {
            setGenres(data.genres)
        }
    }, [data, isError, isLoading])

    console.log(genres);


    const handleCloseModal = () => {
        setModalVisible(false)
    }
    return (
        <Modal animationType="slide" transparent={true}>
            <ScrollView contentContainerStyle={styles.modalView}>

                {
                    genres.map(item => (
                        <TouchableOpacity key={item.id} style={styles.genre_button} activeOpacity={.8}>
                            <Text style={styles.genre_text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }

                <TouchableOpacity onPress={handleCloseModal} >
                    <CloseIcon color='#fff' />
                </TouchableOpacity>

            </ScrollView>
        </Modal>

    )
}

export default CategoriesModal

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    modalView: {
        backgroundColor: '#000',
        shadowColor: '#fff',
        width: width,
        height: height,
        ...commonStyles.centerElements
    },
    genre_button:{
        marginBottom : 12,
    },
    genre_text : {
        fontSize : 20,
        color:'#fff',
    },

});
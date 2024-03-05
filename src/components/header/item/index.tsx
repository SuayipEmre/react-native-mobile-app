import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { commonStyles } from "../../../styles/commonStyle"
import {  setIsGenresModalVisible, setIsMovieModal } from '../../../store/features/modals/genres/actions'
import { colors } from '../../../styles/colors'

type HeaderItemPropsType = {
    text: 'TV-Series' | 'Movies' | 'Categories',
    isGenreModalButton: boolean,
    modalVisible?: boolean,
}


const HeaderItem: React.FC<HeaderItemPropsType> = ({ text, isGenreModalButton, modalVisible }) => {

    const handleModalClick = () => {
        setIsGenresModalVisible(!modalVisible)
    }

    const handleContentChange = () => {
      if (text == 'Movies'){
        setIsMovieModal(true)
      } else if (text == 'TV-Series'){
        setIsMovieModal(false)
      }
    }


    return (
        <View style={styles.item_container}>

            {
                isGenreModalButton ?
                    <TouchableOpacity activeOpacity={.7} onPress={handleModalClick}>
                        <Text style={[{ color: colors.primary }, styles.item]}>{text}</Text>
                    </TouchableOpacity>
                    :
                    (

                        <TouchableOpacity onPress={handleContentChange} >
                            <Text style={ styles.item}>{text}</Text>
                        </TouchableOpacity>
                    )
            }


        </View>
    )
}

export default HeaderItem

const styles = StyleSheet.create({
    item_container: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 6,
        ...commonStyles.centerElements,
        borderRadius: 10,
        borderColor: colors.secondary
    },
    item: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.primary 
    },
})
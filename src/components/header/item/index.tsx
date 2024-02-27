import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../../store/features/theme/hooks'
import { commonStyles } from "../../../styles/commonStyle"
import { setIsModalVisible } from '../../../store/features/modals/movieGenres/actions'
import { colors } from '../../../styles/colors'

type HeaderItemPropsType = {
    text: string,
    isCategoryButton: boolean,
    modalVisible?: boolean,
}


const HeaderItem: React.FC<HeaderItemPropsType> = ({ text, isCategoryButton, modalVisible}) => {
    const currentTheme = useCurrentTheme()

    const handleModalClick = () => {
        setIsModalVisible(!modalVisible)
    }


    return (
        <View style={[{
            borderColor: colors.secondary,
        }, styles.item_container]}>

            {
                isCategoryButton ?
                    <TouchableOpacity activeOpacity={.7} onPress={handleModalClick}>
                        <Text style={[{ color: colors.primary }, styles.item]}>{text}</Text>
                    </TouchableOpacity>
                    :
                    (

                        <Text style={[{ color: colors.primary }, styles.item]}>{text}</Text>
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
    },
    item: {
        fontSize: 15,
        fontWeight: '500'
    },
})
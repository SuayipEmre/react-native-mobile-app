import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../styles/colors'
import { useCurrentTheme } from '../../../store/features/theme/hooks'
const { width, height } = Dimensions.get('screen')
import { commonStyles } from "../../../styles/commonStyle"

type HeaderItemPropsType = {
    text: string,
    isCategoryButton: boolean
}


const HeaderItem: React.FC<HeaderItemPropsType> = ({ text, isCategoryButton }) => {
    const currentTheme = useCurrentTheme()
    const { primary, secondary } = colors[currentTheme]
    return (
        <View style={[{
            borderColor: secondary,
        }, styles.item_container]}>

            {
                isCategoryButton ? <TouchableOpacity activeOpacity={.7}>
                     <Text style={[{ color: primary }, styles.item]}>{text}</Text>
                </TouchableOpacity> : (

                    <Text style={[{ color: primary }, styles.item]}>{text}</Text>
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
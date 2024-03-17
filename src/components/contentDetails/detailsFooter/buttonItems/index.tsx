import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../../styles/colors'

type ContentDetailFooterButtonItemsPropsType = {
    text : 'My List' | 'Rate' | 'Share',
    onPress? : () => void,
    
}
const ContentDetailFooterButtonItems : React.FC <ContentDetailFooterButtonItemsPropsType> = ({text, onPress}) => {
    return (

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ant name="like2" size={24} color={colors.primary} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ContentDetailFooterButtonItems

const styles = StyleSheet.create({
    button: {
        alignItems: 'center'
    },
    text: {
        color: '#eee',
        fontSize: 14
    },
})
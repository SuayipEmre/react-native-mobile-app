import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../../styles/colors'
import styles from './styles'

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


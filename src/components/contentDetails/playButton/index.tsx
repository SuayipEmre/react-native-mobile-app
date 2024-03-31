import {  Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from "../styles"
import { colors } from '../../../styles/colors'
import { useTranslation } from 'react-i18next'

const PlayButton : React.FC = () => {
    const{t} = useTranslation()
    return (
        <View style={styles.button}>
            <Entypo name="controller-play" size={28} color={colors.third} />
            <Text style={styles.play_text}>{t('play')}</Text>
        </View>
    )
}

export default PlayButton

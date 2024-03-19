import {  Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from "../styles"
import { colors } from '../../../styles/colors'

const PlayButton = () => {
    return (
        <View style={styles.button}>
            <Entypo name="controller-play" size={28} color={colors.third} />
            <Text style={styles.play_text}>Play</Text>
        </View>
    )
}

export default PlayButton

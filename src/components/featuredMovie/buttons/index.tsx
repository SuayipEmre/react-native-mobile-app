import {  Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../../styles/colors'

const Buttons: React.FC = () => {

  return (
    <View style={styles.container}>

      <View style={[{ backgroundColor: colors.third }, styles.button_container]}>
        <Entypo name="controller-play" size={24} color={colors.primary} />
        <Text style={{ color: colors.primary }}>Play</Text>
      </View>

      <View style={[{ backgroundColor: colors.third }, styles.button_container]}>
        <Entypo name="plus" size={24} color={colors.primary} />
        <Text style={{ color:colors.primary }}>My List</Text>
      </View>


    </View>
  )
}

export default Buttons


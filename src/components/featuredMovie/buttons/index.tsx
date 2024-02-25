import {  Text, View } from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../../store/features/theme/hooks'
import { colors } from '../../../styles/colors'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const Buttons: React.FC = () => {
  const currentTheme = useCurrentTheme()
  const { primary, secondary, third } = colors[currentTheme]

  return (
    <View style={styles.container}>

      <View style={[{ backgroundColor: third }, styles.button_container]}>
        <Entypo name="controller-play" size={24} color={primary} />
        <Text style={{ color: primary }}>Play</Text>
      </View>

      <View style={[{ backgroundColor: third }, styles.button_container]}>
        <Entypo name="plus" size={24} color={primary} />
        <Text style={{ color: primary }}>My List</Text>
      </View>

    </View>
  )
}

export default Buttons


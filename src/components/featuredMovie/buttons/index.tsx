import {  Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../../styles/colors'
import { useTranslation } from 'react-i18next'

const Buttons: React.FC = () => {
  const{t} = useTranslation()
  return (
    <View style={styles.container}>

      <View style={[{ backgroundColor: colors.third }, styles.button_container]}>
        <Entypo name="controller-play" size={24} color={colors.primary} />
        <Text style={{ color: colors.primary }}>{t('play')}</Text>
      </View>

      <View style={[{ backgroundColor: colors.third }, styles.button_container]}>
        <Entypo name="plus" size={24} color={colors.primary} />
        <Text style={{ color:colors.primary }}>{t('myList')}</Text>
      </View>


    </View>
  )
}

export default Buttons


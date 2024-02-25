import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PlayIcon, PlusIcon } from '../../../icons'
import { useCurrentTheme } from '../../../store/features/theme/hooks'
import { colors } from '../../../styles/colors'
import styles from './styles'


const Buttons : React.FC = () => {
    const currentTheme = useCurrentTheme()
    const { primary, secondary, third } = colors[currentTheme]

  return (
    <View style={styles.container}>
      
      <View style={[{backgroundColor:third},styles.button_container]}>
        <PlayIcon color={primary} />
        <Text style={{color:primary}}>Play</Text>
      </View>

      <View style={[{backgroundColor:third},styles.button_container]}>
        <PlusIcon color={primary} />
        <Text style={{color:primary}}>My List</Text>
      </View>

    </View>
  )
}

export default Buttons


import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { setCurrentTheme } from '../../store/features/theme/actions'
import { colors } from '../../styles/colors'

const ProfileScreen = () => {
  const currentTheme = useCurrentTheme()
  const handleTheme = () => {
    const isCurrentDark: boolean = currentTheme == "darkTheme" ? true : false
    setCurrentTheme(isCurrentDark ? 'lightTheme' : 'darkTheme')
  }
  const {primary, third} = colors[currentTheme]

  return (
    <SafeAreaView style={{
      backgroundColor:third,
      flex : 1,
  }}>


      <TouchableOpacity activeOpacity={.8} onPress={handleTheme}>
        <Text style={{color:primary}}>Change theme</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
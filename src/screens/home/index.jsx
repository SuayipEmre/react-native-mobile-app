import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import { setCurrentTheme } from '../../store/features/theme/actions'

const HomeScreen = () => {

    const crrt = useCurrentTheme()
    const primary = colors[crrt].primary
    const third = colors[crrt].third

    const handleTheme = () => {
      const isCurrentDark = crrt == "darkTheme" ? true : false
      console.log(isCurrentDark);
      setCurrentTheme(isCurrentDark ? 'lightTheme' : 'darkTheme')
    }

    return (
    <View style={{
        backgroundColor:third,
        flex : 1,
    }}>
      <Text>HomeScreen</Text>

      <TouchableOpacity onPress={() => handleTheme()}>
        <Text style={{color : primary}} >Change theme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
    }
})
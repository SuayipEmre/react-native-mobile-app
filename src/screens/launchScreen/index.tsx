import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
const { width, height } = Dimensions.get('window')
import {commonStyles} from '../../styles/commonStyle'

const LaunchScreen: React.FC<any> = ({ navigation }) => {

  const currentTheme = useCurrentTheme()
  const { primary, secondary, third } = colors[currentTheme]


  const firstRingpadding = useSharedValue(0)
  const secondRingpadding = useSharedValue(0)


  useEffect(() => {
    setTimeout(() => firstRingpadding.value = withSpring(firstRingpadding.value + height * 0.05), 100)
    setTimeout(() => secondRingpadding.value = withSpring(secondRingpadding.value + height * 0.045), 100)


    setTimeout(() =>  navigation.navigate('HomeScreen') , 3000)
  }, [])
  return (
    <View style={[{ backgroundColor: third }, styles.container]}>

      <Animated.View style={[{
        padding: firstRingpadding,
        backgroundColor: secondary,
      }, styles.first_ring]}>

        <Animated.View style={[{ padding: secondRingpadding, backgroundColor:primary }, styles.second_ring]}>
          
       <View style={[{
            backgroundColor:third,

       }, styles.title_container]}>
       <Text style={[{
            color : primary,
          }, styles.title]}>MCMOVIE</Text>
       </View>


        </Animated.View>

      </Animated.View>
    </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  first_ring: {
    alignItems: 'center',
    borderRadius: width / 2,
  },
  second_ring: {
    alignItems: 'center',
    borderRadius: width / 2,
  },
  title_container:{
    width : width / 2,
    ...commonStyles.centerElements,
    borderRadius : width / 2,
    padding : 15,
  },
  title: {
    fontSize : 30,
  },


})
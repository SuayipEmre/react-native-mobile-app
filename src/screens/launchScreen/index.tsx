import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../styles/colors'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
const { width, height } = Dimensions.get('window')
import { commonStyles } from '../../styles/commonStyle'

const LaunchScreen: React.FC<any> = ({ navigation }) => {



  const firstRingpadding = useSharedValue(0)
  const secondRingpadding = useSharedValue(0)


  useEffect(() => {
    setTimeout(() => firstRingpadding.value = withSpring(firstRingpadding.value + height * 0.05), 100)
    setTimeout(() => secondRingpadding.value = withSpring(secondRingpadding.value + height * 0.045), 100)


     setTimeout(() => navigation.navigate('HomeScreen'), 3000) 
  }, [])
  return (
    <View style={styles.container}>

      <Animated.View style={[{
        padding: firstRingpadding,
      }, styles.first_ring]}>

        <Animated.View style={styles.second_ring}>

          <View style={styles.title_container}>
            <Text style={styles.title}>MM</Text>
          </View>


        </Animated.View>

      </Animated.View>
    </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  first_ring: {
    alignItems: 'center',
    borderRadius: width / 2,
    backgroundColor: colors.secondary,
  },
  second_ring: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: width / 2,
  },
  title_container: {
    backgroundColor: colors.primary,
    width: width / 2,
    ...commonStyles.centerElements,
    borderRadius: width / 2,
    padding: 15,
  },
  title: {
    color: colors.third,
    fontSize: 30,
  },


})
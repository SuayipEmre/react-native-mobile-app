import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { colors } from '../../styles/colors'

const Loading : React.FC = () => {
  return (
    <View style={styles.container}>
    <AnimatedLottieView
      autoPlay
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'transparent',
      }}
      source={require('../../assets/loading.json')}
    />
  </View>
  )
}

export default Loading

const{height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
     backgroundColor: colors.third,
      height : height,
      alignItems :'center',
      justifyContent :'center'
    },
  })
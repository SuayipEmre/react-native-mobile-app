import {View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import styles from './styles'
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


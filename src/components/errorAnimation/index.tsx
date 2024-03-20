import {  View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import styles from './styles'

const Error : React.FC = () => {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/error.json')}
      />
    </View>
  )
}

export default Error

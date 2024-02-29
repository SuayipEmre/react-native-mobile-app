import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import { commonStyles } from '../../styles/commonStyle'
import AuthenticationInput from '../../components/authenticationInput'

const SignupScreen = () => {
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={styles.container}>
     
     <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
      <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />


    <View style={styles.bottom_content}>

    <TouchableOpacity style={styles.signup_button}>
      <Text style={styles.signup_button_text}>Signup</Text>
    </TouchableOpacity>

    </View>

    </View>
  )

}

export default SignupScreen

const{width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    ...commonStyles.centerElements,
    flex :1,
    backgroundColor : colors.third,
  },

  bottom_content: {
    width: width * 0.8,
    alignItems: 'flex-end',
    marginTop: 15,
    gap: 14,
  },

  signup_button: {
    ...commonStyles.centerElements,
    backgroundColor: '#292928',
    width: width * 0.3,
    height: height * 0.04,

  },
  signup_button_text: {
    color: colors.primary
  },

})
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import AuthenticationInput from '../../components/authenticationInput'
import { commonStyles } from '../../styles/commonStyle'
import {  useNavigation } from '@react-navigation/native'



const LoginScreen: React.FC = () => {

  const navigation : any = useNavigation()


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  console.log('email : ', email)
  console.log('password : ', password)

  return (
    <View style={styles.container}>

      <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
      <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />


      <View style={styles.bottom_content}>
        <TouchableOpacity style={styles.login_button}>
          <Text style={styles.login_button_text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signup_button}
          onPress={() => navigation.navigate('SignupScreen')}
        >

          <Text style={styles.account_text}>
            Don't have an account yet?

            <Text style={styles.signup_text}> Signup</Text>


          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoginScreen

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
    ...commonStyles.centerElements,
  },

  bottom_content: {
    width: width * 0.8,
    alignItems: 'flex-end',
    marginTop: 15,
    gap: 14,
  },
  login_button: {
    ...commonStyles.centerElements,
    backgroundColor: '#292928',
    width: width * 0.3,
    height: height * 0.04,

  },
  login_button_text: {
    color: colors.primary
  },
  signup_button: {},
  account_text: {
    color: colors.primary
  },
  signup_text: {
    color: '#0070BB',
  }
})
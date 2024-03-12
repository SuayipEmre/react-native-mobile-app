import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import AuthenticationInput from '../../components/authenticationInput'
import { commonStyles } from '../../styles/commonStyle'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context'


type LoginScreenProps = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {



  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleLogin = async () => {

    try {
      await auth().signInWithEmailAndPassword(email, password)
      Alert.alert('MM', 'sucsessfuly')
    } catch (error: any | undefined) {
      Alert.alert('MM', error.code)
    }


  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
      <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />


      <View style={styles.body}>

        <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
          <Text style={styles.login_button_text}>Login</Text>
        </TouchableOpacity>

      </View>




      <TouchableOpacity
        style={styles.signup_button}
        onPress={() => navigation.navigate('SignupScreen')}
      >

        <View style={styles.signup_button_content}>
          <Text style={styles.account_text}> Don't have an account? </Text>

          <Text style={styles.signup_text}>Sign up</Text>
        </View>


      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default LoginScreen

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
    alignItems: 'center',
  },

  logo:{
    width : width * 0.8,
    height : height * 0.2,
    resizeMode :'cover'
  },
  body: {
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
    color: colors.primary,
  },
  signup_button: {
    position:'absolute',
    bottom: 50,
  },
  signup_button_content:{
    flexDirection:'row',
    alignItems:'center',
    gap:6,
  },
  account_text: {
    color: colors.primary,

  },
  signup_text: {
    color: '#0070BB',
    fontWeight : '500'
  }
})
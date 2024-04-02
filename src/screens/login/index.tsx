import { Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginScreenContainer from '../../containers/loginScreenContainer'




const LoginScreen: React.FC = () => {



  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleLogin = async () => {

    try {
      await auth().signInWithEmailAndPassword(email, password)
    } catch (error: any | undefined) {
      Alert.alert('MM', error.code)
    }


  }

  return (
    <SafeAreaView style={styles.container}>


      <LoginScreenContainer
        email={email}
        handleLogin={handleLogin}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />

    </SafeAreaView>
  )
}

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
  }
})
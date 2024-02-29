import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import { commonStyles } from '../../styles/commonStyle'
import AuthenticationInput from '../../components/authenticationInput'
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repassword, setRepassword] = useState<string>('')



  const handleSignUp = async() => {

    
    if (email.includes('@') && email.length > 6){
      
      if (password == repassword){
        
      await  auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('MM', 'User account created. Thank you')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('MM', 'That email address is already in use!')
          }
  
          if (error.code === 'auth/invalid-email') {
            Alert.alert('MM', 'That email address is invalid!')
          }
  
          console.error(error);
        })
        
      } else{
        Alert.alert('MM', 'Passwords must be equal.')
        
      }
      
    }
    else{
      Alert.alert('MM', 'The Email field is required!')
    
      
    }



  }

  return (
    <View style={styles.container}>

      <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
      <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />
      <AuthenticationInput value={repassword} setValue={setRepassword} isSecret placeholder='Password' />


      <View style={styles.bottom_content}>

        <TouchableOpacity style={styles.signup_button} onPress={handleSignUp}>
          <Text style={styles.signup_button_text}>Signup</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

}

export default SignupScreen

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    ...commonStyles.centerElements,
    flex: 1,
    backgroundColor: colors.third,
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

/*

auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
*/
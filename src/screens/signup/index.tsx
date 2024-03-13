import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import { commonStyles } from '../../styles/commonStyle'
import AuthenticationInput from '../../components/authenticationInput'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import firestore from '@react-native-firebase/firestore';


type SignupScreenProps = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'SignupScreen'>

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repassword, setRepassword] = useState<string>('')


  const saveUserToDB = async (userCredential: FirebaseAuthTypes.UserCredential) => {
    try {
      await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .set({
          displayName: userCredential.user.email?.split('@')[0],
          email: userCredential.user.email,
          favoriteContents: [],
          contentList: [],
          photo: null,

        })
    } catch (e) {
      console.log(e);

    }

  }


  const handleSignUp = async () => {


    if (email.includes('@') && email.length > 6) {

      if (password == repassword) {




        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential: FirebaseAuthTypes.UserCredential) => {
            Alert.alert('MM', 'User account created. Thank you')
            saveUserToDB(userCredential)

          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('MM', 'That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
              Alert.alert('MM', 'That email address is invalid!')
            }

            console.error(error)
          })

      } else {
        Alert.alert('MM', 'Passwords must be equal.')

      }

    }
    else {
      Alert.alert('MM', 'The Email field is required!')


    }



  }

  return (
    <SafeAreaView style={styles.container}>


      <Image source={require('../../assets/logo.png')} style={styles.logo} />


      <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
      <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />
      <AuthenticationInput value={repassword} setValue={setRepassword} isSecret placeholder='Password' />


      <View style={styles.body}>

        <TouchableOpacity style={styles.signup_button} onPress={handleSignUp}>
          <Text style={styles.signup_button_text}>Sign up</Text>
        </TouchableOpacity>

      </View>


      <TouchableOpacity
        style={styles.login_button}
        onPress={() => navigation.navigate('LoginScreen')}
      >

        <View style={styles.signup_button_content}>
          <Text style={styles.account_text}> Already have an account?  </Text>

          <Text style={styles.signup_text}>Sign in</Text>
        </View>


      </TouchableOpacity>

    </SafeAreaView>
  )

}

export default SignupScreen

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
    alignItems: 'center'
  },

  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'cover'
  },

  body: {
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
  login_button: {
    position: 'absolute',
    bottom: 50,
  },
  signup_button_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  account_text: {
    color: colors.primary,

  },
  signup_text: {
    color: '#0070BB',
    fontWeight: '500'
  }

})

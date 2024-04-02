import { Alert, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context'
import firestore from '@react-native-firebase/firestore';
import SignupScreenContainer from '../../containers/signupScreenContainer'



const SignupScreen: React.FC = () => {

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
          photoURL: null,
          id: userCredential.user.uid

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


      <SignupScreenContainer
        email={email}
        setEmail={setEmail}
        password={password}
        repassword={repassword}
        setPassword={setPassword}
        setRepassword={setRepassword}
        handleSignUp={handleSignUp}

      />

    </SafeAreaView>
  )

}

export default SignupScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,
    alignItems: 'center'
  },

  

})

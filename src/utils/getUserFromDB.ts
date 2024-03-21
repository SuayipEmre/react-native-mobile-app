import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserDBData } from '../types/UserDBdata';

export const getUserFromDB = async () => {
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
    const dbRef = await firestore().collection('users').doc(currentUser?.uid).get()

    if (dbRef.exists) {
      const userData = dbRef.data()
      return userData as UserDBData
    }

    return null
  }
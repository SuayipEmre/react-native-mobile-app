
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const deleteAccount = async (currentUser :  FirebaseAuthTypes.User | null ) => {

    if (currentUser) {
      try {
        await currentUser.delete()
        await deleteUserFromDB(currentUser)
      } catch (error) {
        console.log(error)

      }
    }

  }

  const deleteUserFromDB = async (currentUser :  FirebaseAuthTypes.User | null) => {
    try {
      // delete user informations from database
      await firestore()
        .collection('users')
        .doc(currentUser?.uid)
        .delete()
    } catch (error) {
      console.error("an error occured ", error)
    }
  }

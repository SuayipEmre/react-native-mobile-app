import { Alert,  SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import auth from '@react-native-firebase/auth';
import ProfileScreenContainer from '../../containers/profileScreenContainer';
import Ant from 'react-native-vector-icons/AntDesign'
const ProfileScreen = () => {




  const handleSignout = async () => {

    try {
      await auth().signOut()
    } catch {
      Alert.alert('MM', 'An Error occured')
    }
  }
  return (
    <SafeAreaView style={styles.container}>

     
        <ProfileScreenContainer />
       
        <TouchableOpacity onPress={handleSignout} style={styles.signout_button}>
          <Ant name='logout' size={18} color='red' />
          <Text style={styles.signout_button_text}>Log out</Text>
        </TouchableOpacity>

      

    </SafeAreaView>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    alignItems: 'center',
    flex: 1,

  },

  signout_button:{
    position:'absolute',
    flexDirection :'row',
    alignItems:'center',
    gap:10,
    bottom:10,
    left : 10,
     
    
  },
  signout_button_text: {
    color: 'red',
  },
})
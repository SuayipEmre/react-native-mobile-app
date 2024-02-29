import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {

  const handleSignout = async() => {
    
    try{
      await auth().signOut()
    }catch{
      Alert.alert('MM', 'An Error occured')
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={handleSignout}>
        <Text style={styles.text}>Signout</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.third,
    flex : 1,
  },
  text:{
    color : colors.primary
  }
})
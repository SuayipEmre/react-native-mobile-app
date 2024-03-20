import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles/colors'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ProfilNavigatorStackParamList } from '../../../navigators/types'
import { deleteAccount } from '../deleteAccount'

const ProfileBody = () => {
  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
  const navigation = useNavigation<NavigationProp<ProfilNavigatorStackParamList>>()
 
  const showAlert = () => (
    Alert.alert(
      'MM',
      'You will lose all your data by deleting your account. This action cannot be undone. ',
      [
        {
          text: 'No! I have changed my mind',
          style: 'default',
          isPreferred: true
        },

        {
          text: 'Delete my account',
          onPress: () => deleteAccount(currentUser),
          style: 'destructive',
        },

      ],


    )
  )



  return (
    <View style={styles.body}>

      <TouchableOpacity style={styles.item_container} onPress={() => navigation.navigate('MyListScreen')}>
        <View style={styles.item_left_side}>
          <Ant name='plus' color={colors.primary} size={20} />
          <Text style={styles.item_text}>My List</Text>
        </View>
        <Ant name='right' color={colors.primary} size={16} />

      </TouchableOpacity>

      <View style={styles.item_container}>
        <View style={styles.item_left_side}>

          <Ant name='heart' color={'#FF0800'} size={20} />
          <Text style={styles.item_text}>My Favorites</Text>
        </View>
        <Ant name='right' color={colors.primary} size={16} />
      </View>


      <TouchableOpacity onPress={showAlert} style={styles.item_container}>
        <View style={styles.item_left_side}>
          <Ant name='close' color='red'size={20} />
          <Text style={styles.delete_text}>Delete Account</Text>
        </View>
        <Ant name='right' color={colors.primary} size={16} />
      </TouchableOpacity>


    </View>
  )
}

export default ProfileBody

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item_left_side: {
    flexDirection: 'row',
    alignItems:'center',
    gap:5,
  },
  item_text: {
    color: colors.primary,
    fontSize: 16,
  },
  body: {
    gap: 12,
  },
 
  delete_text: {
    fontWeight: 'bold',
    color: colors.primary,
  },

})
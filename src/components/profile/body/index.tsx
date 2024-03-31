import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles/colors'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { deleteAccount } from '../deleteAccount'
import { ProfileNavigatorStackParamList } from '../../../navigators/types'
import { useTranslation } from 'react-i18next'

const ProfileBody = () => {
  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
  const navigation = useNavigation<NavigationProp<ProfileNavigatorStackParamList>>()
 const{t}  = useTranslation()
  const showAlert = () => (
    Alert.alert(
      'MM',
       t('willLoseData'),
      [
        {
          text: t('changedMind'),
          style: 'default',
          isPreferred: true
        },

        {
          text: t('deleteAccount'),
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
          <Text style={styles.item_text}>{t('myList')}</Text>
        </View>
        <Ant name='right' color={colors.primary} size={16} />

      </TouchableOpacity>

      <View style={styles.item_container}>
        <View style={styles.item_left_side}>

          <Ant name='heart' color={'#FF0800'} size={20} />
          <Text style={styles.item_text}>{t('myFavorites')}</Text>
        </View>
        <Ant name='right' color={colors.primary} size={16} />
      </View>


      <TouchableOpacity onPress={showAlert} style={styles.item_container}>
        <View style={styles.item_left_side}>
          <Ant name='close' color='red'size={20} />
          <Text style={styles.delete_text}>{t('deleteAccount')}</Text>
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
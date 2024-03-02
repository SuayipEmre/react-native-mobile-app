import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ant from 'react-native-vector-icons/AntDesign'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { colors } from '../../../styles/colors';



const ProfileHeader: React.FC = () => {
  
  const currentUser : FirebaseAuthTypes.User | null = auth().currentUser
  
  const handleUpdateProfile = async () => {
    const update = {
      displayName: 'Developer',
      photoURL: 'https://avatars.githubusercontent.com/u/140286752?v=4',
    };


    try {
      await currentUser?.updateProfile(update)
      console.log('Well Done !');

    } catch (e: any) {
      console.log(e)

    }
  }
  return (
    <View style={styles.header}>

      <View style={styles.header_left_side}>
        <View style={styles.image_container}>
          {
            currentUser?.photoURL ? 
            <Image source={{ uri: currentUser?.photoURL }} style={styles.image} />
             : <></>
          }
        </View>

        <View style={styles.user_info_container}>
          <Text style={styles.user_name}>{currentUser?.displayName ?? ''}</Text>
          <Text style={styles.user_email}>{currentUser?.email ?? ''}</Text>
        </View>
      </View>

      <View style={styles.edit_icon_container}>
        <FontAwesome name='edit' color={colors.primary} size={25} onPress={handleUpdateProfile} />
      </View>

    </View>
  )
}

export default ProfileHeader
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: height * 0.15,
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: .4,

  },
  header_left_side: {
    flexDirection: 'row',
    gap: 12,

  },

  image_container: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.15
  },
  user_info_container: {},
  user_name: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '500'
  },
  user_email: {
    color: colors.primary,
    fontWeight: '300',
    marginTop: 8,
    fontSize: 13,
  },
  edit_icon_container: {},
})
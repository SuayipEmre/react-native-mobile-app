import { Image, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { colors } from '../../../styles/colors'
import { useEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/hooks'
import { setIsEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/actions'
import styles from './styles'


const ProfileHeader: React.FC = () => {

  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser

  const editProfileModalVisible = useEditProfileModalVisible()


  const getUserDisplayName = (): string => {
    if (currentUser?.email) {

      if (currentUser?.displayName) return currentUser?.displayName.length > 17 ? currentUser?.displayName.slice(0, 17) + '...' : currentUser?.displayName

      return currentUser?.email.split('@')[0]
    }
    return ""

  }

  

  const getUserProfilePhoto = () => {
    return currentUser?.photoURL ? <Image source={{ uri: currentUser.photoURL }} style={styles.image} /> : <Image source={require('../../../assets/anonymousUser.png')} style={styles.image} />
  }

  
  return (
    <View style={styles.header}>

      <View style={styles.header_left_side}>
        <View style={styles.image_container}>

          {
            getUserProfilePhoto()
          }


        </View>

        <View style={styles.user_info_container}>

          <Text style={styles.user_name}>{getUserDisplayName()}</Text>
          <Text style={styles.user_email}>{currentUser?.email ?? ''}</Text>
        </View>


      </View>

      <View style={styles.edit_icon_container}>
        <FontAwesome name='edit' color={colors.primary} size={25} onPress={() => setIsEditProfileModalVisible(!editProfileModalVisible)} />
      </View>

    </View>
  )
}

export default ProfileHeader

import {  View } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/profile/header'
import ProfileBody from '../../components/profile/body'
import EditProfileModal from '../../components/profile/editProfile'
import styles from './styles'

const ProfileScreenContainer = () => {
  return (
    <View style={styles.wrapper}>
      <ProfileHeader />
      <ProfileBody />
      <EditProfileModal />


    </View>
  )
}

export default ProfileScreenContainer


import {  View } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/profile/header'
import ProfileBody from '../../components/profile/body'
import EditProfile from '../../components/profile/editProfile'
import styles from './styles'

const ProfileScreenContainer = () => {
  return (
    <View style={styles.wrapper}>
      <ProfileHeader />
      <ProfileBody />
      <EditProfile />


    </View>
  )
}

export default ProfileScreenContainer


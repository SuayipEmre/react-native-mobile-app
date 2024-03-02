import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/profile/header'
import ProfileBody from '../../components/profile/body'

const ProfileScreenContainer = () => {
  return (
    <View style={styles.wrapper}>
      <ProfileHeader />
      <ProfileBody />

    </View>
  )
}

export default ProfileScreenContainer


const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    wrapper: {
        width: width * 0.9,
        gap: 12,
        flex: 1,
      },
})
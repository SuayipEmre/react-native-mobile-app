import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import ProfileScreenContainer from '../../containers/profileScreenContainer';


const ProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreenContainer />
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

})
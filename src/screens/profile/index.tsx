import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import auth from '@react-native-firebase/auth';
import ProfileScreenContainer from '../../containers/profileScreenContainer';
import Ant from 'react-native-vector-icons/AntDesign'
import { saveUserLanguagePreference } from '../../utils/saveLanguagePreferenceToStorage';
import { setLanguage } from '../../store/features/language/actions';
import { useLanguage } from '../../store/features/language/hooks';
import { Language } from '../../types/language';
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next';


const ProfileScreen = () => {


  const{t} = useTranslation()
  const language = useLanguage()

  const handleSignout = async () => {

    try {
      await auth().signOut()
    } catch {
      Alert.alert('MM', 'An Error occured')
    }
  }


 

  const handleSetLanguage = async () => {

    //active language is english => new language will be turkish
    //active language is turkish => new language will be english
    const changeLanguageValue = language == Language.en ? Language.tr : Language.en
    setLanguage(changeLanguageValue)
    
    await i18n.changeLanguage(changeLanguageValue)

    //save user language preference to async storage
    await saveUserLanguagePreference(changeLanguageValue)
}


  return (
    <SafeAreaView style={styles.container}>


      <ProfileScreenContainer />
      <Text style={{color : '#fff'}}>{t('categories')}</Text>

      <TouchableOpacity onPress={handleSetLanguage} >
        <Ant name='logout' size={18} color='red' />
        <Text style={styles.signout_button_text}>changeLang</Text>
      </TouchableOpacity>

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

  signout_button: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    bottom: 10,
    left: 10,


  },
  signout_button_text: {
    color: 'red',
  },
})
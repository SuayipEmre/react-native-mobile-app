import { Alert,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles/colors'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { deleteAccount } from '../deleteAccount'
import { ProfileNavigatorStackParamList } from '../../../navigators/types'
import { useTranslation } from 'react-i18next'
import Material from 'react-native-vector-icons/MaterialIcons'
import i18n from '../../../i18n'
import { setLanguage } from '../../../store/features/language/actions'
import { saveUserLanguagePreference } from '../../../utils/saveLanguagePreferenceToStorage'
import { useLanguage } from '../../../store/features/language/hooks'
import { Language } from '../../../types/language'
import ProfileSectionItem from './sectionItem'


const ProfileBody : React.FC = () => {
  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
  const navigation = useNavigation<NavigationProp<ProfileNavigatorStackParamList>>()
  const { t } = useTranslation()
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
    <View style={{gap: 12,}}>

      <Text style={styles.subtitle}>{t('yourAccount')}</Text>


      <ProfileSectionItem
        icon={<Ant name='plus' color={colors.primary} size={20} />}
        text={t('myList')}
        onPress={() => navigation.navigate('MyListScreen')} />

      <ProfileSectionItem
        icon={<Ant name='heart' color={colors.primary} size={20} />}
        text={t('myFavorites')}
      />




      <Text style={styles.subtitle}>{t('app')}</Text>

      <ProfileSectionItem
        icon={<Ant name='close' color='red' size={20} />}
        text={t('deleteAccount')}
        onPress={showAlert}
      />

      <ProfileSectionItem
        icon={<Ant name='logout' size={18} color={colors.primary} />}
        text={t('logout')}
        onPress={handleSignout}
      />


      <ProfileSectionItem
        icon={<Material name='language' color={colors.primary} size={20} />}
        text={t('changeLanguage')}
        onPress={handleSetLanguage}
        isChangeLanguageSection
      />


    </View>
  )
}

export default ProfileBody

const styles = StyleSheet.create({

  subtitle: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },

})
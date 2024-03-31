import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderItem from './item'
import Ant from 'react-native-vector-icons/AntDesign'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'
import GenresModal from '../genresModal'
import { colors } from '../../styles/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'
import { useTranslation } from 'react-i18next'


type headerPropsType = {
    activeContent?: ActiveContent
}

const Header: React.FC<headerPropsType> = ({ activeContent }) => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const isModalVisible = useGenresModalVisible()

    const{t} = useTranslation()


    const goHomeButton = () => <Ant name='closecircleo' size={24} color={colors.primary} onPress={() => navigation.navigate('HomeScreen')} />

    return (
        <View style={styles.container}>
           

            <View style={styles.content}>
                {
                    activeContent == ActiveContent.Movie ? (
                        <>
                            {goHomeButton()}
                            <HeaderItem text={t('tvseries')} isGenreModalButton={false} />
                            <HeaderItem text={t('categories')} modalVisible={isModalVisible} isGenreModalButton />
                        </>
                    ) : activeContent == ActiveContent.TVShow ? (
                        <>
                            {goHomeButton()}
                            <HeaderItem text={t('movies')} isGenreModalButton={false} />
                            <HeaderItem text={t('categories')} modalVisible={isModalVisible} isGenreModalButton />
                        </>
                    ) : <>
                        <HeaderItem text={t('movies')} isGenreModalButton={false} />
                        <HeaderItem text={t('tvseries')} isGenreModalButton={false} />
                    </>

                }


            </View>



            {
                isModalVisible && <GenresModal />
            }



        </View>
    )
}

export default Header

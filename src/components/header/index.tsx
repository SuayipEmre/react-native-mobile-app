import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderItem from './item'

import Ant from 'react-native-vector-icons/AntDesign'
import SearchInput from '../searchInput'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'
import GenresModal from '../genresModal'
import { colors } from '../../styles/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'


type headerPropsType = {
    activeContent: ActiveContent
}

const Header: React.FC<headerPropsType> = ({ activeContent }) => {

    const [isSearch, setIsSearch] = useState<boolean>(false)
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const isModalVisible = useGenresModalVisible()


    const goHomeButton = () => <Ant name='closecircleo' size={24} color={colors.primary} onPress={() => navigation.navigate('HomeScreen')} />

    return (
        <View>
            <View style={styles.header_container}>

                <View style={styles.title_container}>
                    <Text style={styles.title}>MM</Text>
                </View>


                {
                    isSearch && <SearchInput
                        placeholder={activeContent == ActiveContent.TVShow ? 'Search A TV Show' : 'Search a movie'}
                        activeContent={activeContent}
                    />
                }


                <View style={styles.icon_container}>
                    <Ant name="search1" color={'#fff'} size={24} onPress={() => setIsSearch(!isSearch)} />
                </View>

            </View>

            <View style={styles.bottom_content}>
                {
                    activeContent == ActiveContent.Movie ? (
                        <>
                            {goHomeButton()}
                            <HeaderItem text='TV-Series' isGenreModalButton={false} />
                            <HeaderItem text='Categories' modalVisible={isModalVisible} isGenreModalButton />
                        </>
                    ) : activeContent == ActiveContent.TVShow ? (
                        <>
                            {goHomeButton()}
                            <HeaderItem text='Movies' isGenreModalButton={false} />
                            <HeaderItem text='Categories' modalVisible={isModalVisible} isGenreModalButton />
                        </>
                    ) : <>
                        <HeaderItem text='Movies' isGenreModalButton={false} />
                        <HeaderItem text='TV-Series' isGenreModalButton={false} />
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

import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderItem from './item'

import Ant from 'react-native-vector-icons/AntDesign'
import SearchInput from '../searchInput'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'
import GenresModal from '../genresModal'


type headerPropsType = {
    isShowingCategoryButton?: boolean
    activeScreen: 'Home' | 'Tv'
}

const Header: React.FC<headerPropsType> = ({ isShowingCategoryButton, activeScreen }) => {

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const isModalVisible = useGenresModalVisible()
    return (
        <View>

            <View style={styles.header_container}>

                <View style={styles.title_container}>
                    <Text style={styles.title}>MM</Text>
                </View>


                {
                    isSearch && <SearchInput
                     placeholder={activeScreen == 'Tv' ? 'Search A TV Show' : activeScreen == 'Home' ? 'Search something' : ''}
                     activeSearchContent = {activeScreen}
                     />
                }


                <View style={styles.icon_container}>
                    <Ant name="search1" color={'#fff'} size={24} onPress={() => setIsSearch(!isSearch)} />
                </View>

            </View>

            <View style={styles.bottom_content}>
                <HeaderItem text='Movies' isGenreModalButton={false} />
                <HeaderItem text='TV-Series' isGenreModalButton={false} />
                {
                    activeScreen == 'Tv' && <HeaderItem text='Categories' modalVisible={isModalVisible} isGenreModalButton />
                }
            </View>



            {
                isModalVisible && <GenresModal />
            }



        </View>
    )
}

export default Header

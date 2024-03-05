import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderItem from './item'

import Ant from 'react-native-vector-icons/AntDesign'
import SearchInput from '../searchInput'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'


const Header = () => {

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const modalVisible = useGenresModalVisible()



    return (
        <View>

            <View style={styles.header_container}>

                <View style={styles.title_container}>
                    <Text style={styles.title}>MM</Text>
                </View>

                
                {
                    isSearch && <SearchInput />
                }


                <View style={styles.icon_container}>
                    <Ant name="search1" color={'#fff'} size={24} onPress={() => setIsSearch(!isSearch)} />
                </View>

            </View>

            <View style={styles.bottom_content}>
                <HeaderItem text='TV-Series' isGenreModalButton={false} />
                <HeaderItem text='Movies' isGenreModalButton={false} />
                <HeaderItem text='Categories' modalVisible={modalVisible} isGenreModalButton />
            </View>




        </View>
    )
}

export default Header

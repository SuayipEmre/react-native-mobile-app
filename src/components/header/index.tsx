import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderItem from './item'
import { useModalVisible } from '../../store/features/modals/movieGenres/hooks'
import Ant from 'react-native-vector-icons/AntDesign'
import SearchInput from '../searchInput'


const Header = () => {

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const modalVisible = useModalVisible()



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
                <HeaderItem text='TV-Series' isCategoryButton={false} />
                <HeaderItem text='Movies' isCategoryButton={false} />
                <HeaderItem text='Categories' modalVisible={modalVisible} isCategoryButton />
            </View>




        </View>
    )
}

export default Header

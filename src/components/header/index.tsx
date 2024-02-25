import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { SearchIcon } from '../../icons'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import HeaderItem from './item'
import { useModalVisible } from '../../store/features/modals/movieGenres/hooks'
import Ant from 'react-native-vector-icons/AntDesign'
const Header = () => {

    const modalVisible = useModalVisible()
    const currentTheme = useCurrentTheme()


    const { primary } = colors[currentTheme]

    return (
        <View>

            <View style={styles.header_container}>

                <View>
                    <Text style={[{ color: primary }, styles.title]}>MM</Text>
                </View>

                <View>
                    <Ant name="search1" color={'#fff'} size={24} />
                </View>

            </View>
            
            <View style={styles.bottom_content}>
                <HeaderItem text='TV-Series' isCategoryButton={false} />
                <HeaderItem text='Movies' isCategoryButton={false} />
                <HeaderItem text='Categories' modalVisible={modalVisible} isCategoryButton  />
            </View>


           

        </View>
    )
}

export default Header

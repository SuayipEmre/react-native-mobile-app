import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderItem from './item'
import { useModalVisible } from '../../store/features/modals/movieGenres/hooks'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../styles/colors'
const Header = () => {

    const modalVisible = useModalVisible()



    return (
        <View>

            <View style={styles.header_container}>

                <View>
                    <Text style={[{ color:colors.primary }, styles.title]}>MM</Text>
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

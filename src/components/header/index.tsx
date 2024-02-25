import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { SearchIcon } from '../../icons'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import HeaderItem from './item'
import CategoriesModal from '../categoriesModal'

const Header = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const currentTheme = useCurrentTheme()
    const { primary, secondary } = colors[currentTheme]

    return (
        <View>

            <View style={styles.header_container}>
                <View>
                    <Text style={[{ color: primary }, styles.title]}>MM</Text>
                </View>

                <View>
                    <SearchIcon color={primary} />
                </View>

            </View>
            
            <View style={styles.bottom_content}>
                <HeaderItem text='TV-Series' isCategoryButton={false} />
                <HeaderItem text='Movies' isCategoryButton={false} />
                <HeaderItem text='Categories' modalVisible={modalVisible} setModalVisible={setModalVisible} isCategoryButton  />
            </View>


            {
                modalVisible && <CategoriesModal setModalVisible={setModalVisible} />
            }

        </View>
    )
}

export default Header

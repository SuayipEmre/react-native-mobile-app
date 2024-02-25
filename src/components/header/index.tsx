import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { SearchIcon } from '../../icons'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import HeaderItem from './item'

const Header = () => {

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
                <HeaderItem text='TV-Series' />
                <HeaderItem text='Movies' />
                <HeaderItem text='Categories' />
            </View>

        </View>
    )
}

export default Header

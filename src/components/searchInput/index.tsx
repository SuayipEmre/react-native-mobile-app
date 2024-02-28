import { Dimensions, StyleSheet,  TextInput, } from 'react-native'
import React from 'react'
import { useSearchValue } from '../../store/features/search/hooks'
import { colors } from '../../styles/colors'
import { setSearchValue } from '../../store/features/search/actions'
import { NavigationContainerRef, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/screenTypes'
import Animated, { FadeInRight } from 'react-native-reanimated'

export type RootNavigationProp = NavigationContainerRef<RootStackParamList>

const SearchInput: React.FC = () => {

    const searchValue: string = useSearchValue()

    
    const navigation : RootNavigationProp = useNavigation()

    const handleSubmit = () => {
        navigation.navigate('MoviesBySearch', {
            value : searchValue
        })

        setSearchValue('')
    }

    return (
           <Animated.View
           entering={FadeInRight.delay(100).duration(100).springify().damping(12)}
           style={styles.container}>
             <TextInput
                style={styles.input}
                value={searchValue}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='search a movie'
                cursorColor={colors.primary}
                onChangeText={setSearchValue}
                placeholderTextColor='#eee9'
                onSubmitEditing={handleSubmit}
                selectionColor={colors.primary}
            />
           </Animated.View>
    )
}

export default SearchInput


const {  height } = Dimensions.get('window')
const styles = StyleSheet.create({

    container:{
       flex:1,

    },
    input: {
        
        color: colors.primary,
        zIndex: 12,
        height: height *0.04,
        borderColor: colors.secondary,
        borderWidth :1,
        borderRadius : 12,
        paddingHorizontal: 12,
    }
})
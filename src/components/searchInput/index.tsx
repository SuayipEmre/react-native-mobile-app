import { Dimensions, StyleSheet,  TextInput, } from 'react-native'
import React from 'react'
import { useSearchValue } from '../../store/features/search/hooks'
import { colors } from '../../styles/colors'
import { setSearchValue } from '../../store/features/search/actions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Animated, { FadeInRight } from 'react-native-reanimated'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'
import styles from './styles'

type SearchInputPropsType = {
    placeholder:string,
    activeContent : ActiveContent,
    setIsSearch : (isSearch : boolean) => void
}

const SearchInput: React.FC<SearchInputPropsType> = ({placeholder, activeContent, setIsSearch}) => {

    const searchValue: string = useSearchValue()


    
    const navigation  = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const handleSubmit = () => {
        navigation.navigate('ContentBySearchScreen', {
            value : searchValue,
            activeContent,
        })

        setSearchValue('')
        setIsSearch(false)
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
                placeholder={placeholder}
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



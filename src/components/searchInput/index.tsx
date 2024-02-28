import { Dimensions, StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'
import { useSearchValue } from '../../store/features/search/hooks'
import { colors } from '../../styles/colors'
import { setSearchValue } from '../../store/features/search/actions'

const SearchInput: React.FC = () => {

    const searchValue: string = useSearchValue()


    const handleSubmit = () => {}

    return (
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
    )
}

export default SearchInput


const {  height } = Dimensions.get('window')
const styles = StyleSheet.create({

    input: {
       flex:1,
        color: colors.primary,
        zIndex: 12,
        height: height *0.04,
        borderColor: colors.secondary,
        borderWidth :1,
        borderRadius : 12,
        paddingHorizontal: 12,
    }
})
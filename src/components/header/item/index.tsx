import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { commonStyles } from "../../../styles/commonStyle"
import { setIsGenresModalVisible } from '../../../store/features/modals/genres/actions'
import { colors } from '../../../styles/colors'
import { setActiveContent } from '../../../store/features/activeContent/actions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../../navigators/types'
import { ActiveContent } from '../../../types/activeContent'
import Ant from 'react-native-vector-icons/AntDesign'
type HeaderItemPropsType = {
    text: 'TV-Series' | 'Movies' | 'Categories',
    isGenreModalButton: boolean,
    modalVisible?: boolean,

}


const HeaderItem: React.FC<HeaderItemPropsType> = ({ text, isGenreModalButton, modalVisible }) => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()


    const handleModalClick = () => {
        setIsGenresModalVisible(!modalVisible)
    }



    const handleContentChange = () => {
        text == 'TV-Series' ? navigation.navigate('TvShowsScreen') : text == 'Movies' && navigation.navigate('MoviesScreen')
        setActiveContent(text == 'Movies' ? ActiveContent.Movie : ActiveContent.TVShow)
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.7} onPress={isGenreModalButton ? handleModalClick : handleContentChange} style={styles.button} >
                <Text style={styles.item}>{text}</Text>
                {
                    isGenreModalButton && <Ant name='down' size={15} color={colors.primary} />
                }
            </TouchableOpacity>
        </View>
    )
}

export default HeaderItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 6,
        ...commonStyles.centerElements,
        borderRadius: 10,
        borderColor: colors.secondary
    },

    item: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.primary
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        gap:12,
    },
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { commonStyles } from "../../../styles/commonStyle"
import { setIsGenresModalVisible } from '../../../store/features/modals/genres/actions'
import { colors } from '../../../styles/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { setActiveContent } from '../../../store/features/activeContent/actions'
import { useActiveContent } from '../../../store/features/activeContent/hooks'

type HeaderItemPropsType = {
    text: 'TV-Series' | 'Movies' | 'Categories',
    isGenreModalButton: boolean,
    modalVisible?: boolean,
}


const HeaderItem: React.FC<HeaderItemPropsType> = ({ text, isGenreModalButton, modalVisible }) => {

    const activeContent = useActiveContent()



    const handleModalClick = () => {
        setIsGenresModalVisible(!modalVisible)
    }



    const handleContentChange = () => {
        setActiveContent(text == 'Movies' ? 'Movies' : 'TV-Series')
    }


    return (
        <View style={styles.container}>

            {
                isGenreModalButton ?
                    <TouchableOpacity activeOpacity={.7} onPress={handleModalClick}>
                        <Text style={[{ color: colors.primary }, styles.item]}>{text}</Text>
                    </TouchableOpacity>
                    :
                    (

                        <TouchableOpacity onPress={handleContentChange} style={styles.item_container}>
                            <Text style={styles.item}>{text}</Text>

                            {
                                activeContent == text && <Entypo name="check" color='#00FF00' size={18} />
                            }

                        </TouchableOpacity>
                    )
            }


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
    item_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    item: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.primary
    },
})
import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import { ContentListItemType } from '../../types/UserDBdata'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'
import Ant from 'react-native-vector-icons/AntDesign';
import styles from './styles'

type MyListScreenContainerPropsTypes = {
    list: [ContentListItemType] | []
}
const MyListScreenContainer: React.FC<MyListScreenContainerPropsTypes> = ({ list }) => {
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()


    const handleContentDetail = (id: number, type: ActiveContent, name: string) => {

        navigation.navigate('ContentDetailsScreen', {
            content_id: id,
            content_title: name,
            activeContent: type
        })
    }


    return (
        <>
            {
                list.map((item: ContentListItemType, idx) => (
                    <TouchableOpacity key={idx} style={styles.content_container} onPress={() => handleContentDetail(item.contentID, item.contentType, item.contentName)}>
                        <View style={styles.left_side}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            <Text style={styles.content_name}>{item.contentName}</Text>
                        </View>

                        <Ant name="playcircleo" size={28} color={colors.primary} />
                    </TouchableOpacity>
                ))
            }
        </>
    )
}

export default MyListScreenContainer


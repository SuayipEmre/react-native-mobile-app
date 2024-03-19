import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import { ContentListItemType } from '../../types/UserDBdata'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'
import Ant from 'react-native-vector-icons/AntDesign';

type MyListScreenContainerPropsTypes = {
   list: [ContentListItemType] | []
}
const MyListScreenContainer : React.FC<MyListScreenContainerPropsTypes> = ({list}) => {
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

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.third,
        flex: 1,
    },

    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginVertical: 10,
    },
    left_side: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: width * 0.4,
        height: height * 0.17,
        resizeMode: 'stretch',
        borderRadius: 8,
    },
    content_name: {
        color: colors.primary,
        fontWeight: '500',
        width : '50%'
    },
})
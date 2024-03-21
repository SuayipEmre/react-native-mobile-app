import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, Button, FlatList, ListRenderItem, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ChatRoomsNavigatorStackParamList } from '../../navigators/types'
import { MessagesItemType, RoomsTypes } from '../../types/RoomsDB';
import { TextInput } from 'react-native';
import { UserDBData } from '../../types/UserDBdata';
import { getUserFromDB } from '../../utils/getUserFromDB';
import { getRoomsDBRef, sendMessage } from '../../utils/sendMessage';
import styles from './styles'
import { ScrollView } from 'react-native';
import { UUID } from '../../helpers/generateUUID';
import { colors } from '../../styles/colors';

type ChatRoomScreenPropsTypes = NativeStackScreenProps<ChatRoomsNavigatorStackParamList, 'ChatRoomScreen'>

const ChatRoomScreen: React.FC<ChatRoomScreenPropsTypes> = ({ route }) => {

    const [room, setRoom] = useState<RoomsTypes>()
    const [user, setUser] = useState<UserDBData>()
    const [message, setMessage] = useState('')


    const roomID = route.params.room_id

    const getUser = async () => {
        const user = await getUserFromDB()
        user != null && setUser(user)
    }

    useEffect(() => {
        getUser()
        const subscriber = getRoomsDBRef(roomID)
            .onSnapshot(documentSnapshot => {

                const roomData: RoomsTypes = {
                    id: documentSnapshot?.data()?.id,
                    members: documentSnapshot?.data()?.members || [],
                    roomOwner: documentSnapshot?.data()?.roomOwner || "",
                    roomName: documentSnapshot?.data()?.roomName || "",
                    messages: documentSnapshot?.data()?.messages || [],
                }

                setRoom(roomData)
            })


        // Stop listening for updates when no longer required
        return () => subscriber()
    }, [roomID])


    const renderMovies: ListRenderItem<MessagesItemType> = ({ item }) => {


        return (
            <View style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 10,
            }}>
                <Image source={require('../../assets/anonymousUser.png')} style={styles.profile_photo} />
                <View>
                    <Text style={{ color: colors.secondary }}>{item.owner.name}</Text>
                    <Text style={{ color: '#fff' }}>{item.message}</Text>
                </View>
            </View>
        )
    }

    return (

        <View style={styles.container}>
           

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={room?.messages}
                    keyExtractor={() => UUID()}
                    renderItem={renderMovies}
                />

                <View style={styles.inner}>
                    <TextInput
                     placeholderTextColor='#eee8'
                        value={message}
                        onChangeText={setMessage}
                        onSubmitEditing={() => sendMessage(room, user, message, roomID, setMessage)}
                        placeholder="Username"
                        style={styles.textInput}
                    />
                </View>




        </View>

    )
}

export default ChatRoomScreen


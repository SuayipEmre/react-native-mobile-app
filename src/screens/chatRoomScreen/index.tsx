import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ChatRoomsNavigatorStackParamList } from '../../navigators/types'
import { RoomsTypes } from '../../types/RoomsDB';
import { TextInput } from 'react-native';
import { UserDBData } from '../../types/UserDBdata';
import { getUserFromDB } from '../../utils/getUserFromDB';
import { getRoomsDBRef, sendMessage } from '../../utils/sendMessage';
import styles from './styles'

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





    return (
        <View style={styles.container}>

            <TextInput value={message} onChangeText={setMessage} />

            <TouchableOpacity onPress={() => sendMessage(room, user, message, roomID)}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChatRoomScreen


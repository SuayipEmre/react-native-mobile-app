import { Text, View, FlatList, ListRenderItem, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ChatRoomsNavigatorStackParamList } from '../../navigators/types'
import { MessagesItemType, RoomsTypes } from '../../types/RoomsDB';
import { TextInput } from 'react-native';
import { UserDBData } from '../../types/UserDBdata';
import { getUserFromDB } from '../../utils/getUserFromDB';
import { getRoomsDBRef, sendMessage } from '../../utils/sendMessage';
import styles from './styles'
import { colors } from '../../styles/colors';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

type ChatRoomScreenPropsTypes = NativeStackScreenProps<ChatRoomsNavigatorStackParamList, 'ChatRoomScreen'>

const ChatRoomScreen: React.FC<ChatRoomScreenPropsTypes> = ({ route }) => {
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
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


    const getMessageSendTime = (datetime :string) => {
        const date = new Date(datetime)
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const renderMovies: ListRenderItem<MessagesItemType> = ({ item }) => {

        const date = new Date(item.date)
        const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return (
            <View style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 10,
                paddingHorizontal: 12,
            }}>
                {
                    item.owner.photo ? <Image source={{ uri: item.owner.photo }} style={styles.profile_photo} /> : <ActivityIndicator />
                }
                <View style={styles.right_content}>
                    <View style={styles.right_content_top_content}>
                        <Text style={styles.message_owner_username}>
                            {
                                currentUser?.displayName == item.owner.name ? 'You' : item.owner.name
                            }

                        </Text>
                        <Text style={styles.message_time}>{getMessageSendTime(item.date)}</Text>
                    </View>
                    <Text style={{ color: '#fff', width: '80%' }}>{item.message}</Text>
                </View>
            </View>
        )
    }

    const keyExtractor = (item: MessagesItemType) => item.messageId



    return (

        <View style={styles.container}>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={room?.messages}
                keyExtractor={keyExtractor}
                renderItem={renderMovies}
                contentContainerStyle={{ paddingBottom: 50 }}
            />

            <KeyboardAvoidingView
                style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 0, backgroundColor: colors.third }}
                behavior="position"
            >
                <TextInput
                    placeholderTextColor='#eee8'
                    value={message}
                    onChangeText={setMessage}
                    onSubmitEditing={() => {
                        sendMessage(room, user, message, roomID)
                        setMessage('')
                    }}
                    placeholder="Message"
                    style={styles.textInput}
                />
            </KeyboardAvoidingView>
        </View>

    )
}

export default ChatRoomScreen




import { Text, View, FlatList, ListRenderItem, Image, ActivityIndicator } from 'react-native'
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

        console.log('message' , item);


        return (
            <View style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 10,
            }}>
               {
                 item.owner.photo ? <Image source={{ uri: item.owner.photo }} style={styles.profile_photo} /> : <ActivityIndicator />
               }
                <View>
                    <Text style={{ color: colors.secondary }}>{item.owner.name}</Text>
                    <Text style={{ color: '#fff' }}>{item.message}</Text>
                </View>
            </View>
        )
    }

    const keyExtractor = (item: MessagesItemType) => {
        console.log('on key' ,item.messageId);
        
        return item.messageId;
      };


    return (

        <View style={styles.container}>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={room?.messages}
                keyExtractor={keyExtractor}
                renderItem={renderMovies}
            />

            <View style={styles.inner}>
                <TextInput
                    placeholderTextColor='#eee8'
                    value={message}
                    onChangeText={setMessage}
                    onSubmitEditing={() =>{
                        sendMessage(room, user, message, roomID)
                        setMessage('')
                    }}
                    placeholder="Username"
                    style={styles.textInput}
                />
            </View>




        </View>

    )
}

export default ChatRoomScreen



/*

{"date": "2024-03-30T22:00:00.085Z",
 "message": "Lan",
  "messageId": 6,
   "owner": {"id": "wRiAXm0hVlUiiJDKaODL2CPLWG92", 
   "name": "rider dev",
    "photo": "https://firebasestorage.googleapis.com/v0/b/worldofthemovies-ce6c5.appspot.com/o/photos%2Fsuayipemre@gmail.com%2Fprofilephoto.png?alt=media&token=e5c9d42c-3147-4f92-8b35-6c0f8b378b59"}
}


*/
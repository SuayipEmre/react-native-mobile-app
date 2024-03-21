import { NavigationProp } from "@react-navigation/native"
import { ChatRoomsNavigatorStackParamList } from "../navigators/types"
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { RoomsTypes } from "../types/RoomsDB";
import { UserDBData } from "../types/UserDBdata";

export const getDbref = () => {
    const dbRef = firestore().collection('rooms')
    return dbRef
}

export const joinToRoom = async (
    roomId: string,
    roomName: string,
    rooms: RoomsTypes[] | [],
    user: UserDBData | undefined,
    navigation: NavigationProp<ChatRoomsNavigatorStackParamList>
) => {
/* 
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
    

    const room = rooms.find(item => item.id === roomId)
    const members = room?.members

    const isAlreadyInMembers = members?.some(item => item.id === currentUser?.uid)


    if (room?.roomOwner === currentUser?.uid) {
        navigation.navigate('ChatRoomScreen', {
            room_id: roomId,
            room_name: roomName,
        })
    } else if (isAlreadyInMembers) {
        navigation.navigate('ChatRoomScreen', {
            room_id: roomId,
            room_name: roomName,
        })
    } else {
        try {
            const dbDocRef = getDbref().doc(roomId)
            const dbDocSnapshot = await dbDocRef.get()

            if (dbDocSnapshot.exists) {
                const roomData = dbDocSnapshot.data()
                const members = roomData?.members ?? []
                const newMember = {
                    id: user?.id,
                    name: user?.displayName,
                    photo: user?.photoURL,
                }
                const updatedMembers = [...members, newMember]
                await dbDocRef.update({ members: updatedMembers })
            }
        } catch (error) {
            console.error('Error joining room: ', error)
        }
    } */


    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
    

    const room = rooms.find(item => item.id === roomId)
    const members = room?.members

    const isAlreadyInMembers = members?.some(item => item.id === currentUser?.uid)


        try {
            const dbDocRef = getDbref().doc(roomId)
            const dbDocSnapshot = await dbDocRef.get()

            if (dbDocSnapshot.exists) {
                const roomData = dbDocSnapshot.data()
                const members = roomData?.members ?? []
                const newMember = {
                    id: user?.id,
                    name: user?.displayName,
                    photo: user?.photoURL,
                }
                const updatedMembers = [...members, newMember]
                await dbDocRef.update({ members: updatedMembers })
                navigation.navigate('ChatRoomScreen', {
                    room_id: roomId,
                    room_name: roomName,
                })
            }
        } catch (error) {
            console.error('Error joining room: ', error)
        }
}
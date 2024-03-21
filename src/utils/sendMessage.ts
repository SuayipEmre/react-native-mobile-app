import { MessagesItemType, RoomsTypes } from "../types/RoomsDB"
import firestore from '@react-native-firebase/firestore';
import { UserDBData } from "../types/UserDBdata";

export const getRoomsDBRef = (room_id: string) => {
    const dbRef = firestore()
        .collection('rooms')
        .doc(room_id)

    return dbRef
}


export const sendMessage = async (
    room: RoomsTypes | undefined,
    user: UserDBData | undefined,
    message: string,
    room_id: string
) => {

    const messageID = room?.messages?.length && room?.messages?.length + 1

    try {

        const dbRef = getRoomsDBRef(room_id)
        const messageData = {
            owner: {
                id: user?.id,
                photo: user?.photoURL,
                name: user?.displayName
            },
            message,
            messageId: messageID,
            date: (new Date()).toISOString()
        }

        let updatedMessages: MessagesItemType[] = []


        if (room?.messages) {
            updatedMessages = [
                ...room.messages,
                messageData
            ] as MessagesItemType[]
        }

        await dbRef.update({ messages: updatedMessages })
    } catch (error) {
        console.error("Error adding content to database:", error)
        throw error
    }
}


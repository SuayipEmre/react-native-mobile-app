import firestore from '@react-native-firebase/firestore'

export const deleteChatRoom = async (roomID : string) => {
    try {
        await firestore()
            .collection('rooms')
            .doc(roomID)
            .delete();

        console.log('Room deleted successfully');
    } catch (error) {
        console.error('Error deleting room: ', error);
    }
}
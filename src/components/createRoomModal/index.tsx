import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import Ant from 'react-native-vector-icons/AntDesign'
import AuthenticationInput from '../authenticationInput'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { UUID } from '../../helpers/generateUUID'
import firestore from '@react-native-firebase/firestore';
import { useCreateChatRoomModalVisible } from '../../store/features/modals/createChatRoomModal/hooks'
import { setIsCreateChatRoomModalVisible } from '../../store/features/modals/createChatRoomModal/actions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ChatRoomsNavigatorStackParamList } from '../../navigators/types'

const CreateRoomModal: React.FC = () => {
    const [roomName, setRoomName] = useState('')
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser

    const isModalVisible = useCreateChatRoomModalVisible()

    const navigation = useNavigation<NavigationProp<ChatRoomsNavigatorStackParamList>>()


    const handleCreateRoom = async () => {
        try {
            const room_id = UUID()
            await firestore()
                .collection('rooms')
                .doc(room_id)
                .set({
                    id : room_id,
                    members: [
                        {
                            id: currentUser?.uid,
                            photo: currentUser?.photoURL,
                            name: currentUser?.displayName
                        }
                    ],
                    messages: [],
                    roomOwner: currentUser?.uid,
                    roomName,

                })

                navigation.navigate('ChatRoomScreen', {
                    room_id,
                    room_name:roomName,
                })

                setRoomName('')
        } catch (e) {
            console.log(e);

        }
    }


    return (
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
            <SafeAreaView style={styles.modalView}>
                <Text style={styles.title}> Create Your Own Room!</Text>

                <View>
                    <Text style={styles.roomname_label}>Room Name</Text>
                    <AuthenticationInput isSecret={false} placeholder='' setValue={setRoomName} value={roomName} />
                </View>

                <TouchableOpacity onPress={() => setIsCreateChatRoomModalVisible(false)} style={styles.close_modal_button}>
                    <Ant name="close" color={colors.primary} size={24} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.create_room_button} onPress={handleCreateRoom}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

export default CreateRoomModal

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: colors.third,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.primary,
        marginTop: 6,
        marginBottom: 60,
    },
    roomname_label: {
        color: colors.secondary,
        fontSize: 14,
        fontWeight: '500'
    },
    close_modal_button: {
        position: 'absolute',
        top: height * 0.1,
        right: 10,
    },
    create_room_button: {
        width: width * 0.3,
        height: height * 0.04,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
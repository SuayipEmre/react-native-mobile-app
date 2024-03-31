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
import { useTranslation } from 'react-i18next'
import styles from './styles'

const CreateRoomModal: React.FC = () => {
    const [roomName, setRoomName] = useState('')
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
    const{t} = useTranslation()
    const isModalVisible = useCreateChatRoomModalVisible()

    const navigation = useNavigation<NavigationProp<ChatRoomsNavigatorStackParamList>>()


    const handleCreateRoom = async () => {
        try {
            const room_id = UUID()
            await firestore()
                .collection('rooms')
                .doc(room_id)
                .set({
                    id: room_id,
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
                room_name: roomName,
            })

            setRoomName('')
        } catch (e) {
            console.log(e);

        }
    }


    return (
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>

            <View style={styles.modalView}>
                <Text style={styles.title}> {t('createRoom')}</Text>

                <TouchableOpacity onPress={() => setIsCreateChatRoomModalVisible(false)} style={styles.close_modal_button}>
                    <Ant name="close" color={colors.primary} size={24} />
                </TouchableOpacity>

                <View>
                    <Text style={styles.roomname_label}>Room Name</Text>
                    <AuthenticationInput isSecret={false} placeholder='' setValue={setRoomName} value={roomName} />
                </View>

                <View style={styles.create_room_button_container}>
                    <TouchableOpacity style={styles.create_room_button} onPress={handleCreateRoom}>
                        <Text>Create</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </Modal>
    )
}

export default CreateRoomModal


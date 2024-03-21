import { TouchableOpacity } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../styles/colors'
import { setIsCreateChatRoomModalVisible } from '../../store/features/modals/createChatRoomModal/actions'

const OpenCreateChatRoomModal = () => {
    return (
        <TouchableOpacity  onPress={() => setIsCreateChatRoomModalVisible(true)}>
            <Ant name='pluscircleo' color={colors.primary} size={24} />
        </TouchableOpacity>
    )
}

export default OpenCreateChatRoomModal


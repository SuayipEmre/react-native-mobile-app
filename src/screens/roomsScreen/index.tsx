import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/colors'
import Ant from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import CreateRoomModal from '../../components/createRoomModal';
import { RoomsItemType, RoomsTypes } from '../../types/RoomsDB';


const RoomsScreen = () => {
  const [rooms, setRooms] = useState<[RoomsTypes] | []>([])

  const [isCreateRoomModalVisible, setIsCreateRoomModalVisible] = useState(false)

  useEffect(() => {
    getRoomsFromDB()
  }, [])






  const getRoomsFromDB = () => {
    try {
      firestore()
        .collection('rooms')
        .onSnapshot(querySnapshot => {
          const tempRooms: [RoomsTypes] | [] = [];
          querySnapshot.forEach(documentSnapshot => {
            const roomData = {
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            }
            //@ts-ignore
            tempRooms.push(roomData)

          })
          setRooms(tempRooms);
        })
    } catch {
      console.log('error')

    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreateRoomModal  />
        {
          rooms.map(item => (
            <TouchableOpacity key={item.id} style={styles.room_item}>
              <Text style={{ color: '#fff' }}>{item.roomName}</Text>
              <Text style={styles.member_info}>{item.members.length} Members</Text>
              <Entypo name='chevron-down' color={colors.primary} size={24} />
            </TouchableOpacity>
          ))
        }
        
      </ScrollView>
    </View>
  )
}

export default RoomsScreen

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.third,
    alignItems: 'center'
  },
  create_room_button: {
    position: 'absolute',
    bottom: 50,
    right: 20
  },
  room_item: {
    marginVertical: 10,
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: '#303030',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    borderRadius: 7,
  },
  member_info: {
    color: colors.secondary,
    fontSize: 13,

  },
})
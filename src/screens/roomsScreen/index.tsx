import { Alert, Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/colors'
import Ant from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import CreateRoomModal from '../../components/createRoomModal';
import { RoomsTypes } from '../../types/RoomsDB';


const RoomsScreen = () => {
  const [rooms, setRooms] = useState<[RoomsTypes] | []>([])

  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser

  useEffect(() => {
    const unsubscribe = firestore()
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
      }, error => {
        console.error('Error fetching rooms: ', error)
      })
  
    return () => {
      console.log('component was dead.');
      unsubscribe()
      
    }
  }, [])


  const getDbref = () => {
    const dbRef = firestore().collection('rooms')
    return dbRef
  }


  const getRoomsFromDB = () => {
    try {
      getDbref()
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



  const joinToRoom = async (roomId: string) => {
    const room = rooms.find(item => item.id === roomId)
    const members = room?.members
    const isAlreadyInMembers = members?.some(item => item.id === currentUser?.uid)

    if (room?.roomOwner === currentUser?.uid) {
      // Go to the chat
    } else if (isAlreadyInMembers) {
      console.log('You have already joined this room!')
    } else {
      try {
        const dbDocRef = getDbref().doc(roomId)
        const dbDocSnapshot = await dbDocRef.get()

        if (dbDocSnapshot.exists) {
          const roomData = dbDocSnapshot.data()
          const members = roomData?.members ?? []
          const newMember = {
            id: currentUser?.uid,
            name: currentUser?.displayName,
            photo: currentUser?.photoURL,
          }
          const updatedMembers = [...members, newMember]
          await dbDocRef.update({ members: updatedMembers })
        }
      } catch (error) {
        console.error('Error joining room: ', error)
      }
    }
  }


  const showAlert = (roomid: string) => (
    Alert.alert(
      'MM',
      'You will join the room. Please adhere to the community guidelines."',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },

        {
          text: 'Agree',
          onPress: () => joinToRoom(roomid),
          style: 'default',
          isPreferred: true
        },

      ],


    )
  )



  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreateRoomModal />
        {
          rooms.map(item => (
            <TouchableOpacity key={item.id} style={styles.room_item} onPress={() => showAlert(item.id)}>
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
    flex: 1,
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
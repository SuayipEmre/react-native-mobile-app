import { Alert, Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import CreateRoomModal from '../../components/createRoomModal';
import { RoomsTypes } from '../../types/RoomsDB';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ChatRoomsNavigatorStackParamList } from '../../navigators/types'
import { UserDBData } from '../../types/UserDBdata'
import { getUserFromDB } from '../../utils/getUserFromDB';
import { joinToRoom } from '../../utils/joinToRoom';




const RoomsScreen = () => {
  const [rooms, setRooms] = useState<RoomsTypes[] | []>([])
  const [user, setUser] = useState<UserDBData>()

  const navigation = useNavigation<NavigationProp<ChatRoomsNavigatorStackParamList>>()



  const getUser = async () => {
    const user = await getUserFromDB()
    user != null && setUser(user)
  }

  useEffect(() => {

    getUser()
    const unsubscribe = firestore()
      .collection('rooms')
      .onSnapshot(querySnapshot => {
        const tempRooms = [] as RoomsTypes[]
        querySnapshot.forEach(documentSnapshot => {

          const roomData: RoomsTypes = {
            id: documentSnapshot.data().id,
            members: documentSnapshot.data().members || [],
            roomOwner: documentSnapshot.data().roomOwner || "",
            roomName: documentSnapshot.data().roomName || "",
            messages: documentSnapshot.data().messages || [],
          }

          tempRooms.push(roomData)
        })
        setRooms(tempRooms)
      }, error => {
        console.error('Error fetching rooms: ', error)
      })

    return () => {
      console.log('component was dead.')
      unsubscribe()

    }
  }, [])


  const handleJoinToRoomReguest = async (roomid: string, roomName: string) => {
 
    const room = rooms.find(item => item.id === roomid)
    const members = room?.members
    const isAlreadyInMembers = members?.some(item => item.id === user?.id)

    if (isAlreadyInMembers) {
      navigation.navigate('ChatRoomScreen', {
        room_id: roomid,
        room_name: roomName,
      })
    } else {
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
            onPress: async () => {
              await joinToRoom(roomid, roomName, rooms, user, navigation);
            },
            style: 'default',
            isPreferred: true
          },

        ],


      )
    }

  }


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreateRoomModal />
        {
          rooms.map(item => (
            <TouchableOpacity key={item.id} style={styles.room_item} onPress={() => handleJoinToRoomReguest(item.id, item.roomName)}>
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
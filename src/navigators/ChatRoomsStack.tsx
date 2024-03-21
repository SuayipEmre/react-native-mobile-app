import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../styles/colors';
import { ChatRoomsNavigatorStackParamList } from './types';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import RoomsScreen from '../screens/roomsScreen';
import OpenCreateChatRoomModal from '../components/openCreateChatRoomModalButton';
import { Button } from 'react-native';
import ChatRoomScreen from '../screens/chatRoomScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<ChatRoomsNavigatorStackParamList>()

type ChatRoomsStackkProps = NativeStackScreenProps<ChatRoomsNavigatorStackParamList>

export const ChatRoomsStack: React.FC<ChatRoomsStackkProps> = () => {

    const navigation = useNavigation<NavigationProp<ChatRoomsNavigatorStackParamList>>()


    return (
        <Stack.Navigator initialRouteName='RoomsScreen'>

            <Stack.Screen
                name='RoomsScreen'
                component={RoomsScreen}
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: colors.third
                    },
                    headerRight: () => (
                        <OpenCreateChatRoomModal />
                    ),
                }}
            />

            <Stack.Screen
                name='ChatRoomScreen'
                component={ChatRoomScreen}
                options={({ route }) => (
                    {
                        headerTitle: () => (
                            <View>
                                <Text style={{color : colors.primary}}>{route.params.room_name ?? ""}</Text>
                            </View>
                        ),
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                        headerStyle: {
                            backgroundColor: colors.third,

                        },
                        headerLeft: () => (
                            <View style={styles.header_left}>
                              <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()}  />
                            </View>
                          ),
                      

                    }
                )
                }
            />




        </Stack.Navigator>
    )
}



const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    header_left: {
        width: width * 0.2,
        gap: 9,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_title: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: '500'
    },


})

/*



  <Stack.Screen
                name='RoomsScreen'
                component={RoomsScreen}
                options={
                    {
                       header : () => (
                        <View style={{
                            height : 120,
                            backgroundColor:'red',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Text>Rooms</Text>
                            <OpenCreateChatRoomModal />
                        </View>
                       )

                    }

                }
            />



*/
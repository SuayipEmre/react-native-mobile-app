import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../styles/colors';
import { ChatRoomsNavigatorStackParamList } from './types';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import RoomsScreen from '../screens/chatRoomsScreen';
import OpenCreateChatRoomModal from '../components/openCreateChatRoomModalButton';
import { Button } from 'react-native';
import ChatRoomScreen from '../screens/chatRoomScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Evil from 'react-native-vector-icons/EvilIcons'
import { deleteChatRoom } from '../utils/deleteChatRoom';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<ChatRoomsNavigatorStackParamList>()


export const ChatRoomsStack: React.FC = () => {

    const navigation = useNavigation<NavigationProp<ChatRoomsNavigatorStackParamList>>()
    const { t } = useTranslation()
    const handleDeleteRoom = async (roomid: string) => {
        await deleteChatRoom(roomid)
        navigation.navigate('RoomsScreen')
        Alert.alert('MM', t('succesfullyDeleted'))
    }

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
                        headerLeft: () => (
                            <View style={styles.header_left}>
                                <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.navigate('RoomsScreen')} />
                            </View>
                        ),
                        headerRight: () => (
                            <>
                                <Evil name='trash' size={24} color={colors.primary} onPress={() => handleDeleteRoom(route.params.room_id)} />
                            </>
                        ),
                        headerTitle: () => (
                            <View>
                                <Text style={{ color: colors.primary }}>{route.params.room_name ?? ""}</Text>
                            </View>
                        ),

                        headerTitleStyle: {
                            fontSize: 18,
                        },
                        headerStyle: {
                            backgroundColor: colors.third,
                        },


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


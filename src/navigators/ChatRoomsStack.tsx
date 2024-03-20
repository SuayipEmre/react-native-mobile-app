import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../styles/colors';
import { ChatRoomsNavigatorStackParamList } from './types';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import RoomsScreen from '../screens/roomsScreen';
import OpenCreateChatRoomModal from '../components/createChatRoomModalButton';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator<ChatRoomsNavigatorStackParamList>()

type ChatRoomsStackkProps = NativeStackScreenProps<ChatRoomsNavigatorStackParamList>

export const ChatRoomsStack: React.FC<ChatRoomsStackkProps> = ({ navigation }) => {




    return (
        <Stack.Navigator initialRouteName='RoomsScreen'>

            <Stack.Screen
                name='RoomsScreen'
                component={RoomsScreen}
                options={{
                    headerTintColor : '#fff',
                    headerStyle : {
                        backgroundColor :colors.third
                    },
                    headerRight: () => (
                      <OpenCreateChatRoomModal />
                    ),
                  }}
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
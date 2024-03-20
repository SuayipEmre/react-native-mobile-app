import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../styles/colors';
import { ProfilNavigatorStackParamList } from './types';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ProfileScreen from '../screens/profile';
import MyListScreen from '../screens/myListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator<ProfilNavigatorStackParamList>()

type ProfileStackProps = NativeStackScreenProps<ProfilNavigatorStackParamList>
export const ProfileStack: React.FC<ProfileStackProps> = ({ navigation }) => {




    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>

            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name='MyListScreen'
                component={MyListScreen}
                options={{
                    headerTitle: '',
                    headerTintColor: colors.primary,
                    headerStyle: {
                        backgroundColor: colors.third,
                    },
                    headerLeft: () => (
                        <View style={styles.header_left}>
                            <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.navigate('ProfileScreen')} />
                            <Text style={styles.header_title}>My List</Text>
                        </View>
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
        gap:9,
        flexDirection:'row',
        alignItems: 'center',
    },
    header_title: {
        color: colors.primary,
        fontSize: 15,
        fontWeight :'500'
    },
  
 
})

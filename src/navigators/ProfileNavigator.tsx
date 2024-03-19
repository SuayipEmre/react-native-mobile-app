import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import { ProfilNavigatorStackParamList } from './types';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ProfileScreen from '../screens/profile';
import MyListScreen from '../screens/myListScreen';


const Stack = createNativeStackNavigator<ProfilNavigatorStackParamList>()


export const ProfileStack = ({ navigation }: any) => {


    const [isSearch, setIsSearch] = useState<boolean>(false)


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
                    headerShown: false,
                }}
            />




        </Stack.Navigator>
    )
}



const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    header_title: {
        color: colors.primary,
        fontSize: 15,
    },
    header_right: {
        alignItems: 'center',
        width: width * 0.1,
    },
    header_left: {
        width: width * 0.1,
        alignItems: 'center',
    },
})

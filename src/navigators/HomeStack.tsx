import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import LaunchScreen from '../screens/launchScreen';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Stack = createNativeStackNavigator()
export const HomeStack: React.FC<any> = ({ navigation, route }) => {


  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    routeName == undefined ? navigation.setOptions({ tabBarStyle: { display: "none" } }) : navigation.setOptions({ tabBarStyle: { display: "true", backgroundColor:"black" } })

  }, [navigation, route]);


  return (
    <Stack.Navigator initialRouteName='LaunchScreen'>

      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={{
          headerTitle : 'McMovie',
          headerStyle : {
            backgroundColor : colors.third,
          },
          headerTintColor :colors.primary
        }}
      />

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
         headerShown : false,
        }}
      />


    </Stack.Navigator>
  )
}
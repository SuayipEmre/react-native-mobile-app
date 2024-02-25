import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { useCurrentTheme } from '../store/features/theme/hooks';
import { colors } from '../styles/colors';
import LaunchScreen from '../screens/launchScreen';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Stack = createNativeStackNavigator()
export const HomeStack: React.FC<any> = ({ navigation, route }) => {


  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    routeName == undefined ? navigation.setOptions({ tabBarStyle: { display: "none" } }) : navigation.setOptions({ tabBarStyle: { display: "true" } })

  }, [navigation, route]);

  const currentTheme = useCurrentTheme()
  const { primary, secondary, third } = colors[currentTheme]

  return (
    <Stack.Navigator initialRouteName='LaunchScreen'>

      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={{
          headerTitle : 'McMovie',
          headerStyle : {
            backgroundColor : third,
          },
          headerTintColor : primary
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
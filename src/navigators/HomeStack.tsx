import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import LaunchScreen from '../screens/launchScreen';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MoviesByGenreScreen from '../screens/moviesByGenre';
import { HomeNavigatorStackParamList } from './types';
import MoviesBySearchScreen from '../screens/moviesBySearchValue';



const Stack = createNativeStackNavigator<HomeNavigatorStackParamList>()


export const HomeStack = ({ route, navigation } : any) => {


  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    routeName == undefined ? navigation.setOptions({ tabBarStyle: { display: "none" } }) : navigation.setOptions({ tabBarStyle: { display: "true", backgroundColor: "black" } })

  }, [navigation, route]);


  return (
    <Stack.Navigator initialRouteName='LaunchScreen'>

      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={{
          headerTitle: 'McMovie',
          headerStyle: {
            backgroundColor: colors.third,
          },
          headerTintColor: colors.primary
        }}
      />

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MoviesByGenreScreen"
        component={MoviesByGenreScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route?.params?.value || '',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerLeft : () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
            headerTintColor : colors.primary,
            headerStyle: {
              backgroundColor: colors.third,

            },

          }
        )
        }
      />
      <Stack.Screen
        name="MoviesBySearchScreen"
        component={MoviesBySearchScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route?.params?.value || '',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerLeft : () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
            headerTintColor : colors.primary,
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



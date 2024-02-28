import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import LaunchScreen from '../screens/launchScreen';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MoviesScreen from '../screens/movies';
import Ionicons from 'react-native-vector-icons/Ionicons'

export type RootStackParamList = {
  LaunchScreen: undefined;
  HomeScreen: undefined
  MoviesScreen: { isMoviesBySearch: boolean, isMoviesByGenre: boolean, value: string, genreid? : string  }
}


const Stack = createNativeStackNavigator<RootStackParamList>()


export const HomeStack: React.FC<any> = ({ route, navigation }) => {


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
        name="MoviesScreen"
        component={MoviesScreen}
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
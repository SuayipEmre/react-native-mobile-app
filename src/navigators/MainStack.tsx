import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MoviesByGenreScreen from '../screens/moviesByGenre';
import { MainNavigatorStackParamList } from './types';
import MoviesBySearchScreen from '../screens/contentBySearchValue';
import MovieDetailsScreen from '../screens/movieDetails';
import TvShowsScreen from '../screens/tvShowsScreen';
import ContentBySearchScreen from '../screens/contentBySearchValue';



const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()


export const MainStack = ({ navigation }: any) => {




  return (
    <Stack.Navigator initialRouteName='HomeScreen'>



      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='TvShowsScreen'
        component={TvShowsScreen}
        options={  
          {
            headerTitle:'TV Shows',
            headerTitleStyle: {
              fontSize: 15,
            },
            headerLeft: () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.third,

            },

          }
        
        }
      />


      <Stack.Screen
        name="MoviesByGenreScreen"
        component={MoviesByGenreScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route.params.value ?? "",
            headerTitleStyle: {
              fontSize: 18,
            },
            headerLeft: () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.third,

            },

          }
        )
        }
      />
      <Stack.Screen
        name="ContentBySearchScreen"
        component={ContentBySearchScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route?.params?.value || '',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerLeft: () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.third,

            },

          }
        )
        }
      />

      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route.params.movie_title ?? "",
            headerTintColor: colors.primary,
            headerLeft: () => <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()} />,
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




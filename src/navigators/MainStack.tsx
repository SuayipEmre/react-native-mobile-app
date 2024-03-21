import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import { colors } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MainNavigatorStackParamList } from './types';
import TvShowsScreen from '../screens/tvShowsScreen';
import ContentBySearchScreen from '../screens/contentBySearchValue';
import MoviesScreen from '../screens/moviesScreen';
import ContentDetailsScreen from '../screens/contentDetails';
import ContentByGenreScreen from '../screens/contentByGenre';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SearchInput from '../components/searchInput';
import { ActiveContent } from '../types/activeContent';
import Ant from 'react-native-vector-icons/AntDesign'
import { NavigationProp, useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()


export const MainStack : React.FC = ( ) => {


  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
  const [isSearch, setIsSearch] = useState<boolean>(false)


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
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.third,
            },
            headerTitleStyle: {
              fontSize: 15,
            },
            
            headerTitle: () => isSearch ? <SearchInput activeContent={ActiveContent.TVShow} placeholder='Search a TV Show' setIsSearch={setIsSearch}  /> : <Text style={styles.header_title}>TV Shows</Text>,
            headerLeft: () => (
              <View style={styles.header_left}>
                <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()}  />
              </View>
            ),
            headerRight: () => (
              <View style={styles.header_right}>
                <Ant name="search1" color={'#fff'} size={24} onPress={() => setIsSearch(!isSearch)} />
              </View>
            )

          }

        }
      />

      <Stack.Screen
        name='MoviesScreen'
        component={MoviesScreen}
        options={
          {
            headerTitle: () => isSearch ? <SearchInput activeContent={ActiveContent.Movie} placeholder='Search a movie' setIsSearch={setIsSearch} /> : <Text style={styles.header_title}>Movies</Text>,
            headerTitleStyle: {
              fontSize: 15,
            },
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.third,
            },
            headerLeft: () => (
              <View style={styles.header_left}>
                <Ionicons name='arrow-back' size={24} color={colors.primary} onPress={() => navigation.goBack()}  />
              </View>
            ),
            headerRight: () => (
              <View style={styles.header_right}>
                <Ant name="search1" color={'#fff'} size={24} onPress={() => setIsSearch(!isSearch)} />
              </View>
            )

          }

        }
      />



      <Stack.Screen
        name="ContentByGenreScreen"
        component={ContentByGenreScreen}
        options={({ route } ) => (
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
        options={({ route }) => (
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
        name="ContentDetailsScreen"
        component={ContentDetailsScreen}
        options={({ route }: { route: any }) => (
          {
            headerTitle: route.params.content_title ?? "",
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



const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  header_title : {
    color : colors.primary,
    fontSize :15,
  },
  header_right:{
    alignItems:'center',
    width : width * 0.1,
  },
  header_left:{
    width : width * 0.1,
    alignItems:'center',
  },
})

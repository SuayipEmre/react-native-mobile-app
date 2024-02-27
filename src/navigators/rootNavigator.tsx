import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/profile';
import { HomeStack } from './HomeStack';
import { UserIcon } from '../icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator()

const RootNavigator: React.FC = () => {




  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarActiveBackgroundColor:colors.third,
          tabBarInactiveBackgroundColor: colors.third,
          headerShown: false,
          tabBarStyle : {
            backgroundColor:colors.third,
          }
          
        }}
      >

        <Tab.Screen
          name='HomeNavigator'
          component={HomeStack}
          options={{
            tabBarIcon : ({color}) =>(
              <Icon name="home" color={color} size={24}  />
            ),
           
          
          }}
        />

        <Tab.Screen
         name='ProfileScreen'
          component={ProfileScreen}
          options={{
            tabBarIcon : ({color}) =>(
              <UserIcon color={color} />
            )
          }}
          />


      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
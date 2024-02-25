import {useLayoutEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import { useCurrentTheme } from '../store/features/theme/hooks';
import { colors } from '../styles/colors';
import ProfileScreen from '../screens/profile';
import LaunchScreen from '../screens/launchScreen';
import { HomeStack } from './HomeStack';

const Tab = createBottomTabNavigator()

const RootNavigator : React.FC = () => {

  const currentTheme = useCurrentTheme()
  const {primary, secondary, third} = colors[currentTheme]

  

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='HomeNavigator'
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: primary,
          tabBarInactiveTintColor: secondary,
          tabBarActiveBackgroundColor: third,
          tabBarInactiveBackgroundColor: third,
          headerShown : false,
        }}
      >

        <Tab.Screen name='HomeNavigator' component={HomeStack} />

        <Tab.Screen name='ProfileScreen' component={ProfileScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
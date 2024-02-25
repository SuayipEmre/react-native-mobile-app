import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useCurrentTheme } from '../store/features/theme/hooks';
import { colors } from '../styles/colors';
import ProfileScreen from '../screens/profile';
import { HomeStack } from './HomeStack';
import { HomeIcon, UserIcon } from '../icons';

const Tab = createBottomTabNavigator()

const RootNavigator: React.FC = () => {

  const currentTheme = useCurrentTheme()
  const { primary, secondary, third } = colors[currentTheme]



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
          headerShown: false,
        }}
      >

        <Tab.Screen
          name='HomeNavigator'
          component={HomeStack}
          options={{
            tabBarIcon : ({color}) =>(
             <HomeIcon color={color} />
            )
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/profile';
import { HomeStack } from './HomeStack';
import { UserIcon } from '../icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationStack } from './AuthenticationStack';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const RootNavigator: React.FC = () => {

  const user:boolean = false


  if (user){
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

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false,
      }}>
        <Stack.Screen name='AuthenticationNavigator' component={AuthenticationStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )


  
}

export default RootNavigator
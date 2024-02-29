import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import { colors } from '../styles/colors';
import { AuthenticationNavigatorStackParamList } from './types';


const Stack = createNativeStackNavigator<AuthenticationNavigatorStackParamList>()


export const AuthenticationStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerTitle: 'Login to MM',
          headerStyle: {
            backgroundColor: colors.third,
          },
          headerTintColor: colors.primary
        }}
      />

      <Stack.Screen
        name='SignupScreen'
        component={SignupScreen} 
        options={{
          headerTitle: 'Signup to MM',
          headerStyle: {
            backgroundColor: colors.third,
          },
         
          headerTintColor: colors.primary
        }}
        />


    </Stack.Navigator>
  )
}



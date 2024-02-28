import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import { colors } from '../styles/colors';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined
}


const Stack = createNativeStackNavigator<RootStackParamList>()


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



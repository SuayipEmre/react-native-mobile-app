import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';


const Stack = createNativeStackNavigator()





const App : React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Deneme' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

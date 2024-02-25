import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import { Provider } from 'react-redux';
import store from './src/store/app';
import { useCurrentTheme } from './src/store/features/theme/hooks';
import { colors } from './src/styles/colors';
import RootNavigator from './src/navigators/rootNavigator';


const Stack = createNativeStackNavigator()





const App: React.FC = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

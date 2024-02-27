import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store/app';
import RootNavigator from './src/navigators/rootNavigator';



const App: React.FC = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

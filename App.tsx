import React from 'react'
import { Provider } from 'react-redux';
import store from './src/store/app';
import RootNavigator from './src/navigators/RootNavigator';



const App: React.FC = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

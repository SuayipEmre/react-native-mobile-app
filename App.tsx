import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import store from './src/store/app';
import RootNavigator from './src/navigators/rootNavigator';
import i18 from './src/i18n'
import { getLanguagePreference } from './src/utils/getLanguagePreferenceFromStorage';
import { setLanguage } from './src/store/features/language/actions';


const App: React.FC = () => {

  

  useEffect(() => {
    const getUsersLanguage = async () => {
      const language = await getLanguagePreference()

      //f the user has set a language, make the application language the same before starting the app.
      if (language) {
        i18.changeLanguage(language)
        setLanguage(language)
        console.log('store : ', language);
        
      }

    }
    getUsersLanguage()

  }, [])
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

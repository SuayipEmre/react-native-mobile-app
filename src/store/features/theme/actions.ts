import  { _setCurrentTheme } from ".";
import store from "../../app";

export const setCurrentTheme = (theme : 'lightTheme' | 'darkTheme')  => store.dispatch(_setCurrentTheme(theme))
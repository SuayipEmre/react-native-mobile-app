import  { _setCurrentTheme } from ".";
import store from "../../app";

export const setCurrentTheme = (theme : string)  => store.dispatch(_setCurrentTheme(theme))
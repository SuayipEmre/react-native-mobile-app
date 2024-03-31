import { _setLanguage } from ".";
import { Language } from "../../../types/language";
import store from "../../app";


export const setLanguage = (lang : Language) => store.dispatch(_setLanguage(lang))
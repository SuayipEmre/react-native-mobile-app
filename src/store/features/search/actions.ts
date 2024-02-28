import { _setSearchValue } from ".";
import store from "../../app";

export const setSearchValue = (value : string) => store.dispatch(_setSearchValue(value))
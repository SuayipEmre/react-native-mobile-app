import { _setIsEditProfileModalVisible } from ".";
import store from "../../../app";

export const setIsEditProfileModalVisible = (modalValue : boolean) => store.dispatch(_setIsEditProfileModalVisible(modalValue))
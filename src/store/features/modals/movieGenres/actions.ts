import { _setIsModalVisible } from ".";
import store from "../../../app";


export const setIsModalVisible = (isModalVisible : boolean) => store.dispatch(_setIsModalVisible(isModalVisible))
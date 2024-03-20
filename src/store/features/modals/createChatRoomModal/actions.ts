
import { _setIsCreateChatRoomModalVisible } from ".";
import store from "../../../app";


export const setIsCreateChatRoomModalVisible = (isModalVisible : boolean) => store.dispatch(_setIsCreateChatRoomModalVisible(isModalVisible))
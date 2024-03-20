import { useSelector } from "react-redux";
import { RootState } from "../../../app";

export const useCreateChatRoomModalVisible = () => useSelector((state : RootState) => state.createChatRoomModal.isCreateChatModalVisible)
import { useSelector } from "react-redux";
import { RootState } from "../../../app";

export const useEditProfileModalVisible = () => useSelector((state : RootState) =>state.editProfileModal.isEditProfileModalVisible )
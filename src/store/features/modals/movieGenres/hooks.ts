import { useSelector } from "react-redux";
import { RootState } from "../../../app";

export const useModalVisible = () => useSelector((state : RootState) => state.movieGenres.isModalVisible)
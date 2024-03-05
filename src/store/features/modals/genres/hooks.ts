import { useSelector } from "react-redux";
import { RootState } from "../../../app";

export const useGenresModalVisible = () => useSelector((state : RootState) => state.genres.isModalVisible)
export const useIsMovieModal = () => useSelector((state : RootState) => state.genres.isMovie)
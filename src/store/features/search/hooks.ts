import { useSelector } from "react-redux";
import { RootState } from "../../app";

export const useSearchValue = () => useSelector((state : RootState) => state.searchMovie.searchValue)
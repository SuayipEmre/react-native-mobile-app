import { useSelector } from "react-redux";
import { RootState } from "../../app";

export const useLanguage = () => useSelector((state : RootState) => state.language.activeLanguage)
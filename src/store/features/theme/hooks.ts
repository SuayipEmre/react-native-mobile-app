import { useSelector } from "react-redux";
import { RootState } from "../../app";


export const useCurrentTheme = () => useSelector((state : RootState) => state.theme.currentTheme)


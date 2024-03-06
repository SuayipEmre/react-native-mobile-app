import { useSelector } from "react-redux";
import { RootState } from "../../app";

export const useActiveContent = () => useSelector((state : RootState) => state.activeContent.activeContent)
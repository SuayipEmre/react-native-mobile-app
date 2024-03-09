import { _setActiveContent } from ".";
import { ActiveContent } from "../../../types/activeContent";
import store from "../../app";

export const setActiveContent = (content: ActiveContent | null) => store.dispatch(_setActiveContent(content))
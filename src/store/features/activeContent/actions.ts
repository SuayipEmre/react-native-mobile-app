import { _setActiveContent } from ".";
import store from "../../app";

export const setActiveContent = (content: 'Movies' | 'TV-Series') => store.dispatch(_setActiveContent(content))
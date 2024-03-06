import { _setIsModalVisible} from ".";
import store from "../../../app";


export const setIsGenresModalVisible = (isModalVisible : boolean) => store.dispatch(_setIsModalVisible(isModalVisible))
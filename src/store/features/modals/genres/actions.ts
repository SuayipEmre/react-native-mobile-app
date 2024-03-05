import { _setIsModalVisible, _setIsMovieModal } from ".";
import store from "../../../app";


export const setIsGenresModalVisible = (isModalVisible : boolean) => store.dispatch(_setIsModalVisible(isModalVisible))
export const setIsMovieModal = (isModalVisible : boolean) => store.dispatch(_setIsMovieModal(isModalVisible))
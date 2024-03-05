import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isModalVisible:boolean,
    isMovie : boolean
}
const initialState : initialStateType = {
    isModalVisible: false,
    isMovie : false
}

export const genresModal = createSlice({
    name : 'movie genres',
    initialState,
    reducers: {
        _setIsModalVisible : (state, action : PayloadAction<boolean>) => {
          state.isModalVisible = action.payload
        },

        _setIsMovieModal : (state, action : PayloadAction<boolean>) => {
            state.isMovie = action.payload
          
        }
    }
})

export const {_setIsModalVisible,_setIsMovieModal} = genresModal.actions
export default genresModal.reducer
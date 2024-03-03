import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isModalVisible:boolean
}
const initialState : initialStateType = {
    isModalVisible: false
}

export const movieGenres = createSlice({
    name : 'movie genres',
    initialState,
    reducers: {
        _setIsModalVisible : (state, action : PayloadAction<boolean>) => {
          state.isModalVisible = action.payload
        }
    }
})

export const {_setIsModalVisible} = movieGenres.actions
export default movieGenres.reducer
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isModalVisible:boolean,
}
const initialState : initialStateType = {
    isModalVisible: false,
}

 const genresModal = createSlice({
    name : 'genres',
    initialState,
    reducers: {
        _setIsModalVisible : (state, action : PayloadAction<boolean>) => {
          state.isModalVisible = action.payload
        },

       
    }
})

export const {_setIsModalVisible} = genresModal.actions
export default genresModal.reducer
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isEditProfileModalVisible:boolean
}
const initialState : initialStateType = {
    isEditProfileModalVisible: false
}

export const editProfileModal = createSlice({
    name : 'edit profile modal',
    initialState,
    reducers: {
        _setIsEditProfileModalVisible : (state, action : PayloadAction<boolean>) => {
          state.isEditProfileModalVisible = action.payload
        }
    }
})

export const {_setIsEditProfileModalVisible} = editProfileModal.actions
export default editProfileModal.reducer

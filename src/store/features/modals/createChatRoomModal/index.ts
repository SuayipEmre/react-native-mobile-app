import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isCreateChatModalVisible:boolean,
}
const initialState : initialStateType = {
    isCreateChatModalVisible: false,
}

 const createChatRoomModal = createSlice({
    name : 'create chat room modal',
    initialState,
    reducers: {
        _setIsCreateChatRoomModalVisible : (state, action : PayloadAction<boolean>) => {
            console.log('on store' , action.payload);
            
          state.isCreateChatModalVisible = action.payload
        },

       
    }
})

export const {_setIsCreateChatRoomModalVisible} = createChatRoomModal.actions
export default createChatRoomModal.reducer

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateTypes = {
    currentTheme : string
}

const initialState : initialStateTypes = {
    currentTheme : 'lightTheme',
}

export const theme  = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        _setCurrentTheme : (state, action : PayloadAction<string>) => {
          state.currentTheme = action.payload
        }
    }
})


export const {_setCurrentTheme} = theme.actions
export default theme.reducer
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Language } from "../../../types/language";


type initialStateTypes = {
    activeLanguage:  Language
}




const initialState: initialStateTypes = {
    activeLanguage : Language.tr
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        _setLanguage: (state, action: PayloadAction<Language>) => {
            state.activeLanguage = action.payload
        }
    }
})

export const { _setLanguage } = languageSlice.actions
export default languageSlice.reducer
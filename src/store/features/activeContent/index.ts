import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    activeContent : 'Movies' | 'TV-Series'
}
const initialState  : initialStateType= {
    activeContent: 'Movies'
}

const activeContent = createSlice({
    name :'active content',
    initialState,
    reducers : {
        _setActiveContent : (state, action : PayloadAction<'Movies' | 'TV-Series'>) => {
          state.activeContent = action.payload
        }
    }
})

export const{_setActiveContent} = activeContent.actions
export default activeContent.reducer
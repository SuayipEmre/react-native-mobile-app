import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ActiveContent } from "../../../types/activeContent"

type initialStateType = {
    activeContent : ActiveContent | null
}
const initialState  : initialStateType= {
    activeContent: ActiveContent.Movie
}

const activeContent = createSlice({
    name :'active content',
    initialState,
    reducers : {
        _setActiveContent : (state, action : PayloadAction<ActiveContent | null>) => {
          state.activeContent = action.payload
        }
    }
})

export const{_setActiveContent} = activeContent.actions
export default activeContent.reducer
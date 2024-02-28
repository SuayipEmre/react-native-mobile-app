import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    searchValue : string
}
const initialState : initialStateType = {
    searchValue : ''
}
export const searchMovie = createSlice({
    name : 'search movie',
    initialState,
    reducers : {
        _setSearchValue : (state, action : PayloadAction<string>) => {
          state.searchValue = action.payload
        }
    }
})


export const{_setSearchValue} = searchMovie.actions
export default searchMovie.reducer

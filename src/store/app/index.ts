import { configureStore } from '@reduxjs/toolkit'
import moviesApi from '../features/APIs/movies'
import genresApi from '../features/APIs/genres'
import movieGenres from '../features/modals/movieGenres'
import searchMovie from '../features/search'
import editProfileModal from '../features/modals/editProfileModal'

const store = configureStore({

    reducer : {
        movieGenres :movieGenres,
        searchMovie : searchMovie,
        editProfileModal : editProfileModal,
        [moviesApi.reducerPath] : moviesApi.reducer,
        [genresApi.reducerPath] : genresApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(moviesApi.middleware)
                .concat(genresApi.middleware)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
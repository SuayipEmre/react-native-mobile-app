import { configureStore } from '@reduxjs/toolkit'
import moviesApi from '../features/APIs/movies'
import genresApi from '../features/APIs/genres'
import genres from '../features/modals/genres'
import searchMovie from '../features/search'
import editProfileModal from '../features/modals/editProfileModal'
import activeContent from '../features/activeContent'
import tvShowsApi from '../features/APIs/tvseries'

const store = configureStore({

    reducer : {
        genres :genres,
        searchMovie : searchMovie,
        editProfileModal : editProfileModal,
        activeContent : activeContent,
        [moviesApi.reducerPath] : moviesApi.reducer,
        [genresApi.reducerPath] : genresApi.reducer,
        [tvShowsApi.reducerPath] : tvShowsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(moviesApi.middleware)
                .concat(genresApi.middleware)
                .concat(tvShowsApi.middleware)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
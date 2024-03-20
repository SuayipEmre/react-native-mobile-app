import { configureStore } from '@reduxjs/toolkit'
import genres from '../features/modals/genres'
import searchMovie from '../features/search'
import editProfileModal from '../features/modals/editProfileModal'
import activeContent from '../features/activeContent'
import TvSeriesService from '../../Services/TvSeriesService'
import GenresService from '../../Services/GenresService'
import MoviesService from '../../Services/MoviesService'
import createChatRoomModal from '../features/modals/createChatRoomModal'

const store = configureStore({

    reducer : {
        genres :genres,
        searchMovie : searchMovie,
        editProfileModal : editProfileModal,
        activeContent : activeContent,
        createChatRoomModal : createChatRoomModal,
        [MoviesService.reducerPath] : MoviesService.reducer,
        [GenresService.reducerPath] : GenresService.reducer,
        [TvSeriesService.reducerPath] : TvSeriesService.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(MoviesService.middleware)
                .concat(GenresService.middleware)
                .concat(TvSeriesService.middleware)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
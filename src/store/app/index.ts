import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import theme from '../features/theme'
import moviesApi from '../features/APIs/movies'

const store = configureStore({

    reducer : {
        theme : theme,
        [moviesApi.reducerPath] : moviesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(moviesApi.middleware)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
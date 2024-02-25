import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import theme from '../features/theme'

const store = configureStore({

    reducer : {
        theme : theme,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
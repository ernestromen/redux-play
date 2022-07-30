import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    dataDisplay: dataReducer,
  },
})
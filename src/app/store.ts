import { configureStore } from '@reduxjs/toolkit'
import pinnedReducer from '../features/pinnedCourseSlice'
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    pinnedSnippet: pinnedReducer,
    searchSnippet: searchReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

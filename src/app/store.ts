import { configureStore } from '@reduxjs/toolkit'
import addSnippetSlice from '../features/addSnippetSlice'
import pinnedReducer from '../features/pinnedSnippetSlice'
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    pinnedSnippet: pinnedReducer,
    searchSnippet: searchReducer,
    addSnippet: addSnippetSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

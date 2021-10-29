import { configureStore } from '@reduxjs/toolkit'
import addSnippetSlice from '../features/addSnippetSlice'
import allSnippetSlice from '../features/allSnippetSlice'
import pinnedReducer from '../features/pinnedSnippetSlice'
import searchReducer from '../features/searchSlice'
import singleSnippetSlice from '../features/singleSnippetSlice'

export const store = configureStore({
  reducer: {
    pinnedSnippet: pinnedReducer,
    searchSnippet: searchReducer,
    addSnippet: addSnippetSlice,
    allSnippet: allSnippetSlice,
    singleSnippet: singleSnippetSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

import { configureStore } from '@reduxjs/toolkit'
import addSnippetReducer from '../features/addSnippetSlice'
import allSnippetReducer from '../features/allSnippetSlice'
import pinnedReducer from '../features/pinnedSnippetSlice'
import searchReducer from '../features/searchSlice'
import singleSnippetReducer from '../features/singleSnippetSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    pinnedSnippet: pinnedReducer,
    searchSnippet: searchReducer,
    addSnippet: addSnippetReducer,
    allSnippet: allSnippetReducer,
    singleSnippet: singleSnippetReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

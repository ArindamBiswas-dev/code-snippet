import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface stateType {
  snippets: {
    id: string
    title: string
    short_description: string
    code: string
    tags: string[]
  }[]
}

const initialState: stateType = {
  snippets: [],
}

const allSnippetState = createSlice({
  name: 'allSnippet',
  initialState,
  reducers: {
    getAllSnippet(state, action: PayloadAction<string>) {
      // call the backend api by using userId = action.payload
      // snippets = fetchedData
    },
  },
})

export const { getAllSnippet } = allSnippetState.actions
export default allSnippetState.reducer

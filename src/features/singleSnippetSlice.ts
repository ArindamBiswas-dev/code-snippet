import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SingleSnippetStateType {
  id: string
  title: string
  short_description: string
  code: string
  tags: string[]
}

const initialState: SingleSnippetStateType = {
  id: '',
  title: '',
  short_description: '',
  code: '',
  tags: [],
}

const singleSnippetState = createSlice({
  name: 'singleSnippet',
  initialState,
  reducers: {
    getSingleSnippet(state, action: PayloadAction<string>) {
      // call the backend api by using snippetId = action.payload
      // snippet = fetchedData
    },
  },
})

export const { getSingleSnippet } = singleSnippetState.actions
export default singleSnippetState.reducer

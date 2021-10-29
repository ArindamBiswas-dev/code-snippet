import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pinnedSnippetState {
  snippets: {
    id: string
    title: string
    short_description: string
    code: string
    tags: string[]
  }[]
}

const initialState: pinnedSnippetState = {
  snippets: [
    {
      id: '5',
      title: '',
      short_description: '',
      code: '',
      tags: [],
    },
    {
      id: '3',
      title: '',
      short_description: '',
      code: '',
      tags: [],
    },
  ],
}

const pinnedSnippetSlice = createSlice({
  name: 'pinnedSnippet',
  initialState,
  reducers: {
    getPinnedSnippet(state, action: PayloadAction<string>) {
      // call the backend api by using userId = action.payload
      // snippets = fetchedData
    },
  },
})

export const { getPinnedSnippet } = pinnedSnippetSlice.actions
export default pinnedSnippetSlice.reducer

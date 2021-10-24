import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface snippetFormType {
  title: string
  shortDescription: string
  tags: string
  documentation: string
  code: string
}

const initialState: snippetFormType = {
  title: '',
  shortDescription: '',
  tags: '',
  documentation: '',
  code: '',
}

const addSnippetSlice = createSlice({
  name: 'addSnippet',
  initialState,
  reducers: {
    onChangeHandler(state, action: PayloadAction<any>) {
      switch (action.payload.type) {
        case 'title':
          state.title = action.payload.value
          break
        case 'shortDescription':
          state.shortDescription = action.payload.value
          break
        case 'documentation':
          state.documentation = action.payload.value
          break
        case 'code':
          state.code = action.payload.value
          break
        case 'tags':
          state.tags = action.payload.value
          break

        default:
          break
      }
    },
    onSubmitHandler(state) {
      let tagsArray = state.tags.split(',')
      tagsArray = tagsArray.map(tag => tag.trim().toLowerCase())

      const newStateObj = {
        ...state,
        tags: tagsArray,
      }
      console.log(newStateObj)
      // add the snippet to db
    },
  },
})

export const { onChangeHandler, onSubmitHandler } = addSnippetSlice.actions
export default addSnippetSlice.reducer

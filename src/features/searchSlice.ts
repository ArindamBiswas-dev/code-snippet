import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface searchState {
  courses: {
    id: string
    title: string
    short_description: string
    code: string
    tags: string[]
  }[]
}

const initialState: searchState = {
  courses: [
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

const searchCourseState = createSlice({
  name: 'searchCourse',
  initialState,
  reducers: {
    getSearchCourse(state, action: PayloadAction<string>) {
      // call the backend api by using searchTerm = action.payload
      // courses = fetchedData
    },
  },
})

export const { getSearchCourse } = searchCourseState.actions
export default searchCourseState.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pinnedCourseState {
  courses: {
    id: string
    title: string
    short_description: string
    code: string
    tags: string[]
  }[]
}

const initialState: pinnedCourseState = {
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

const pinnedCourseSlice = createSlice({
  name: 'pinnedCourse',
  initialState,
  reducers: {
    getPinnedCourse(state, action: PayloadAction<string>) {
      // call the backend api by using userId = action.payload
      // courses = fetchedData
    },
  },
})

export const { getPinnedCourse } = pinnedCourseSlice.actions
export default pinnedCourseSlice.reducer

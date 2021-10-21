import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface stateType {
  courses: {
    id: string
    title: string
    short_description: string
    code: string
    tags: string[]
  }[]
}

const initialState: stateType = {
  courses: [],
}

const allCourseState = createSlice({
  name: 'allCourse',
  initialState,
  reducers: {
    getAllCourse(state, action: PayloadAction<string>) {
      // call the backend api by using userId = action.payload
      // courses = fetchedData
    },
  },
})

export const { getAllCourse } = allCourseState.actions
export default allCourseState.reducer

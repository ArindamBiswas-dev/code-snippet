import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface stateType {
  id: string
}

const initialState: stateType = {
  id: '',
}

const userSate = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      // set the user id
      state.id = action.payload
    },
  },
})

export const { setUserId } = userSate.actions
export default userSate.reducer

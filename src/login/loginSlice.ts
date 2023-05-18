import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  logged: boolean
}

const initialState: CounterState = {
  logged: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    allowLogin: (state) => {
      state.logged = true
    },
  },
})

export const { allowLogin } = loginSlice.actions

export default loginSlice.reducer
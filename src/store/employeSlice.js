import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: []
}

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    addEmploye: (state, action) => {
      state.employees = [...state.employees, action.payload]
    },
    removeEmploye: (state, action) => {}
  }
})

export const { addEmploye, removeEmploye } = employeSlice.actions

export default employeSlice.reducer

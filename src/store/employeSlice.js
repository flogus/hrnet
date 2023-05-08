import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [
    [
      'John',
      'init',
      '10/02/2020',
      'Windows',
      '28/10/1955',
      'blue screen street',
      'Seattle',
      'Washington',
      '98101'
    ]
  ]
}

const extraUser = [
  'Jack',
  'extraUser',
  '10/02/2020',
  'Windows',
  '28/10/1955',
  'blue screen street',
  'Seattle',
  'Washington',
  '98101'
]

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    addEmploye: (state, action) => {
      console.log('addEmploye state :', state, action)
      state.employees = [...state.employees, action.payload]
    },
    removeEmploye: (state, action) => {}
  }
})

export const { addEmploye, removeEmploye } = employeSlice.actions

export default employeSlice.reducer

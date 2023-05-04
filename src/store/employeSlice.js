import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: []
}
// {
//   firstname: 'john',
//   lastname: 'doe',
//   dateofbirth: '20/10/1990',
//   startdate: '01/01/2023',
//   adress: [
//     {
//       street: 'boulevard',
//       city: 'nantes',
//       state: 'California',
//       zipcode: '90303'
//     }
//   ],
//   departement: 'engineering'
// }

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    addEmploye: (state, action) => {
      state.employees = [...state.employees, action.payload]
      // console.log('addEmploye state :', state)
      // console.log(
      //   'addEmploye action :',
      //   action.payload.firstname,
      //   action.payload.lastname
      // )
      // {
      //   firstname: action.payload.firstname,
      //   lastname: action.payload.lastname
      // }
    },
    removeEmploye: (state, action) => {}
  }
})

export const { addEmploye, removeEmploye } = employeSlice.actions

export default employeSlice.reducer

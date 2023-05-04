import { configureStore } from '@reduxjs/toolkit'
import employeReducer from './employeSlice'

export default configureStore({
  reducer: {
    employeData: employeReducer
  }
})

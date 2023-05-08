import React from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector, useDispatch } from 'react-redux'
import { addEmploye } from '../../store/employeSlice'

const columns = [
  'First Name',
  'Last Name',
  'Start Date',
  'Departement',
  'Date of Birth',
  'Street',
  'City',
  'State',
  'Zip Code'
]

const data = [
  [
    'Bill',
    'Gates',
    '10/02/2023',
    'Windows',
    '28/10/1955',
    'blue screen street',
    'Seattle',
    'Washington',
    '98101'
  ]
]

const options = {
  download: false,
  filter: false,
  selectableRows: 'none',
  displayRowCheckbox: false
}

export default function table () {
  const reduxData = useSelector(state => state.employeData.employees)
  console.log('reduxData', reduxData)

  const dispatch = useDispatch()
  const userdata = [
    'Steve Extra',
    'Jobs',
    '10/02/2020',
    'Windows',
    '28/10/1955',
    'blue screen street',
    'Seattle',
    'Washington',
    '98101'
  ]

  const data2 = [
    {
      name: 'Joe James',
      lastname: 'James',
      company: 'Test Corp',
      city: 'Yonkers',
      state: 'NY'
    },
    {
      name: 'John Walsh',
      lastname: 'James',
      company: 'Test Corp',
      city: 'Hartford',
      state: 'CT'
    },
    {
      name: 'Bob Herm',
      lastname: 'James',
      company: 'Test Corp',
      city: 'Tampa',
      state: 'FL'
    },
    {
      name: 'James Houston',
      lastname: 'James',
      company: 'Test Corp',
      city: 'Dallas',
      state: 'TX'
    }
  ]
  return (
    <div>
      <button onClick={() => dispatch(addEmploye(userdata))}>
        Add employe
      </button>
      <MUIDataTable
        title={'Current Employees'}
        columns={columns}
        data={reduxData}
        options={options}
      />
    </div>
  )
}

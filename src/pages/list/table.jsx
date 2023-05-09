import React from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector } from 'react-redux'

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

const options = {
  download: false,
  filter: false,
  selectableRows: 'none',
  displayRowCheckbox: false
}

export default function table () {
  const reduxData = useSelector(state => state.employeData.employees)

  return (
    <div>
      <MUIDataTable
        title={'Current Employees'}
        columns={columns}
        data={reduxData}
        options={options}
      />
    </div>
  )
}

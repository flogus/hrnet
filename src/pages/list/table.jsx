import React from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector } from 'react-redux'
// const employee = useSelector(employee)

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
  ],
  [
    'Steve',
    'Jobs',
    '01/12/2020',
    'Apple',
    '24/02/1955',
    'ipad street',
    'Palo Alto',
    'California',
    '94301'
  ]
]

const options = {
  download: false,
  filter: false,
  selectableRows: 'none',
  displayRowCheckbox: false
}

export default function table () {
  return (
    <div>
      <MUIDataTable
        title={'Current Employees'}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}

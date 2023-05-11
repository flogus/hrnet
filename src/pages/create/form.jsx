import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmploye } from '../../store/employeSlice'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { TextField } from '@mui/material'
import dataStates from '../../data/states.js'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import FormControl from '@mui/material/FormControl'
import { FlogModalComponent } from 'flogmodal'
import 'flogmodal/dist/index.css'
import './form.css'

export default function form () {
  function saveEmployee () {
    dispatch(addEmploye(newEmploye))
    setMymodal(true)
  }

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [dateOfBirth, setDateOfBirth] = React.useState(dayjs('1971-12-27'))
  const [startDate, setStartDate] = React.useState(dayjs('2023-12-01'))
  const [street, setStreet] = React.useState('')
  const [city, setCity] = React.useState('')
  const [zipCode, setZipCode] = React.useState('')
  const [americanState, setAmericanState] = React.useState('CA')
  const [department, setDepartment] = React.useState('Sales')

  const handleDepartementChange = event => {
    setDepartment(event.target.value)
  }

  const newEmploye = [
    firstName,
    lastName,
    dayjs(dateOfBirth).format('DD/MM/YYYY'),
    dayjs(startDate).format('DD/MM/YYYY'),
    street,
    city,
    americanState,
    zipCode,
    department
  ]

  const menuList = dataStates.map(element => (
    <MenuItem value={element.abbreviation} key={element.abbreviation}>
      {element.name} - {element.abbreviation}
    </MenuItem>
  ))

  const [mymodal, setMymodal] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <form action='#' id='create-employee'>
        <div className='spaceBetween'>
          <TextField
            id='firstName'
            label='First name'
            variant='outlined'
            margin='none'
            onChange={event => setFirstName(event.target.value)}
            fullWidth
          />
        </div>
        <div className='spaceBetween'>
          <TextField
            id='lastName'
            label='Last name'
            variant='outlined'
            margin='none'
            onChange={event => setLastName(event.target.value)}
            fullWidth
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
          <div className='spaceBetween'>
            <FormControl fullWidth>
              <DatePicker
                id='dateOfBirth'
                label='Date of birth'
                margin='dense'
                openTo='year'
                onChange={newValue => setDateOfBirth(newValue)}
                defaultValue={dayjs('1971-12-27')}
                format='DD/MM/YYYY'
              />
            </FormControl>
          </div>
          <div className='spaceBetween'>
            <FormControl fullWidth>
              <DatePicker
                id='startDate'
                label='Start Date'
                margin='dense'
                onChange={newValue => setStartDate(newValue)}
                defaultValue={dayjs('2023-12-01')}
                format='DD/MM/YYYY'
              />
            </FormControl>
          </div>
        </LocalizationProvider>

        <fieldset className='address'>
          <legend>Address</legend>

          <div className='spaceBetween'>
            <TextField
              id='street'
              label='Street'
              variant='outlined'
              margin='none'
              onChange={event => setStreet(event.target.value)}
              fullWidth
            />
          </div>
          <div className='spaceBetween'>
            <TextField
              id='city'
              label='City'
              variant='outlined'
              margin='none'
              onChange={event => setCity(event.target.value)}
              fullWidth
            />
          </div>

          <FormControl fullWidth>
            <Select
              label='americanState'
              id='americanState'
              value='CA'
              onChange={event => setAmericanState(event.target.value)}
            >
              {menuList}
            </Select>
          </FormControl>

          <div className='spaceBetween'>
            <TextField
              id='zipCode'
              label='Zip-code'
              variant='outlined'
              margin='none'
              onChange={event => setZipCode(event.target.value)}
              fullWidth
            />
          </div>
        </fieldset>

        <div className='spaceBetween'>
          <FormControl fullWidth>
            <Select
              label='Department'
              id='department'
              value='Sales'
              onChange={handleDepartementChange}
            >
              <MenuItem value='Sales'>Sales</MenuItem>
              <MenuItem value='Marketing'>Marketing</MenuItem>
              <MenuItem value='Engineering'>Engineering</MenuItem>
              <MenuItem value='Human Resources'>Human Resources</MenuItem>
              <MenuItem value='Legal'>Legal</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          onClick={() => saveEmployee()}
          variant='secondary'
          endIcon={<SendIcon />}
          className='customButton'
        >
          Save
        </Button>
        <br />
        <br />
      </form>

      <FlogModalComponent
        visibility={mymodal}
        buttonLabel='Save'
        titleLabel='HR net'
        content='Employee Created!'
        linkTitle='Open the modal with a link'
      />
    </div>
  )
}

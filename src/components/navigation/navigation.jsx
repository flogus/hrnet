import React, { useState } from 'react'
import './navigation.css'

import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, Link as RouterLink } from 'react-router-dom'

function LinkTab (props) {
  return (
    <Tab
      component={Link}
      onClick={event => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

export default function navigation () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/create'>Create</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
      </ul>
    </nav>
  )
}

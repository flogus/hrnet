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
  const [active, setActive] = React.useState(0)

  return (
    <nav>
      <ul>
        <li>
          <Link
            to='/'
            onClick={() => setActive(0)}
            className={`${active == 0 && 'active'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/create'
            onClick={() => setActive(1)}
            className={`${active == 1 && 'active'}`}
          >
            Create
          </Link>
        </li>
        <li>
          <Link
            to='/list'
            onClick={() => setActive(2)}
            className={`${active == 2 && 'active'}`}
          >
            List
          </Link>
        </li>
      </ul>
    </nav>
  )
}

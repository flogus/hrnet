import React, { useState } from 'react'
import './navigation.css'

import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function navigation () {
  const [currenttab, setCurrenttab] = useState(0)
  const setTab = (event, newValue) => {
    setCurrenttab(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={currenttab} onChange={(event, tab) => setTab(tab)}>
        <Tab label='Home' href='/' />
        <Tab label='Create' href='/create' />
        <Tab label='List' href='/list' />
      </Tabs>
    </Box>
  )
}

import * as React from 'react';
import './navigation.css'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Link } from 'react-router-dom'



function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function navigation () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Tabs aria-label="nav tabs example">
          <LinkTab label="Home" href="/" />
          <LinkTab label="Create" href="/create" />
          <LinkTab label="List" href="/list" />
        </Tabs>
      </Box>
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
    </div>
  )
}

import React from 'react'
import './navigation.css'

import { Link } from 'react-router-dom'

export default function navigation () {
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

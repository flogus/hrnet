import React from 'react'
import './banner.css'
export default function banner (props) {
  return (
    <div className='banner'>
      <h1>HR net</h1>
      <h2>{props.title}</h2>
    </div>
  )
}

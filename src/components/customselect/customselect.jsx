import React from 'react'

export default function customselect (props) {
  const data = props.data
  
  const datalist = data.map(element => (
    <option key={element.name}>{element.name}</option>
  ))

  return (
    <div>
      <label>{props.label}</label>
      <select>{datalist}</select>
    </div>
  )
}

import React from 'react'

export default function customselect (props) {
  const data = props.data

  // WHY?
  // const datalist2 = data.map((element) => {element.name});
  const datalist = data.map(element => (
    <option key={element.name}>{element.name}</option>
  ))

  return (
    <div>
      <label>{props.label}</label>
      <select id={props.id}>{datalist}</select>
    </div>
  )
}

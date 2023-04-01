import React from 'react'
import Banner from '../../components/banner/banner'
import Navigation from '../../components/navigation/navigation'
import Form from './form'

export default function create () {
  return (
    <div>
      <Banner title='Create' />
      <Navigation />
      <Form />
    </div>
  )
}

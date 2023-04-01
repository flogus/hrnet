import React from 'react'
import Banner from '../../components/banner/banner'
import Navigation from '../../components/navigation/navigation'
import Table from './table'

export default function list() {
  return (
    <div>
      <Banner title="List"/>
      <Navigation />
      <Table />
    </div>
  )
}
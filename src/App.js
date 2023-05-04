import React from 'react'
import '../src/css/App.css'
import '../src/css/hrnet.css'
import '../src/css/jquery.datetimepicker.css'
import Create from './pages/create/create'
import List from './pages/list/list'
import NoMatch from './pages/nomatch'
import Home from './pages/home/home'
import store from '../src/store/store'
import Banner from '../src/components/banner/banner'
import Navigation from '../src/components/navigation/navigation'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Banner title='List' />
        <Navigation />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='list' element={<List />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

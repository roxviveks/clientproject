import React from 'react'
import Nav from './docs/Nav'
import Bodys from './comp/Bodys'
import {  Route, Routes } from 'react-router-dom'
import Shop from './comp/Shop'
import Terms from './comp/Terms'
import Login from './comp/Login'

const App = () => {
  return (
    <div>
      <Nav />
  

      <Routes>
        <Route path='/' element={<Bodys />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      

    </div>
  )
}

export default App
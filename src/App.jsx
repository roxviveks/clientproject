import React from 'react'
import "./bundle.css"
import './coaching.css'
import "./about.css"
import Nav from './docs/Nav'
import Bodys from './comp/Bodys'
import {  Route, Routes } from 'react-router-dom'
import Shop from './comp/Shop'
import Terms from './comp/Terms'
import Login from './comp/Login'
import Bundal from './comp/Bundal'
import Coach from './comp/Coach'
import About from './comp/About'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Bodys />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/bundles' element={<Bundal />}/>
        <Route path='/terms' element={<Terms />} />
        <Route path='/coaching' element={<Coach />} />
        <Route path='/About' element ={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      

    </div>
  )
}

export default App
import React from 'react'
import "./bundle.css"
import './coaching.css'
import "./about.css"
import './shop.css'
import './nav.css'
import './footer.css'
import Nav from './docs/Nav'
import Bodys from './comp/Bodys'
import {  Route, Routes } from 'react-router-dom'
import Shop from './comp/Shop'
import Terms from './comp/Terms'
import Login from './comp/Login'
import Bundal from './comp/Bundal'
import Coach from './comp/Coach'
import About from './comp/About'
import Footer from './comp/Footer'

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
      
        <Footer />

    </div>
  )
}

export default App
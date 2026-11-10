import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div className='logindiv'>
    <h1 className='loginh'>DEOL FITNESS</h1>
    <form className="loginform">
      <input type="text" placeholder="Number" />
      <br />
      <input type="password" placeholder="--OTP--" />
      <br />
      <button type="submit">sign up</button>
    </form>
    <div className="loginflex">
      <div className="divlogin">
        <h2 className='loginheaddiv'>Explore</h2>
          <ul className='explorelist'>
            <Link className='loginlink' to='/'><li>Home</li></Link>
            <Link className='loginlink' to='/shop'><li>Shop</li></Link>
            <Link className='loginlink' to='/bundles'><li>Bundles</li></Link>
            <Link className='loginlink' to='/coaching'><li>Coaching</li></Link>
            <Link className='loginlink' to='/About'><li>About</li></Link>
            <Link className='loginlink' to='/terms'><li>Terms</li></Link>
          </ul>
      </div>
      <div className="divlogin">
        <h2 className='loginheaddiv'>Your account</h2>
        <p>Acount</p>
        <p>Your account</p>
      </div>
      <div className="divlogin">
        <h2 className='loginheaddiv'>Here to help</h2>
        <p>Here to help</p>
        <p>Help ur supports</p>      
      </div>
    </div>
  </div>
  )
}

export default Login
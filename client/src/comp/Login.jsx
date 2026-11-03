import React from 'react'

const Login = () => {
  return (
    <div className='logindiv'>
    <h1 className='loginh'>DEOL FITNESS</h1>
    <form className="loginform">
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>)
}

export default Login
import React from 'react'
import './style.css'
const Register = () => {
  return (
    <div className="page flex center">
      <div className="register-container flex">
        <div className="register-left"></div>
        <div className="register-right flex column spaceEvenly">
          <h2>Welcome to Online Recipes</h2>
          <div className="register-input-container flex column center spaceEvenly">
              <input type="text" name="name" id="name" placeholder='Name' className='register-input-text register-input'/>
              <input type="text" name="email" id="email" placeholder='Email' className='register-input-text register-input'/>
              <input type="password" name="password" id="password" placeholder='Password' className='register-input-text register-input'/>
              <button className='register-input register-button'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
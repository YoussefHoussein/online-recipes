import React from 'react'
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const openRegister = () => {
        navigate("/register");
    }
  return (
    <div className='page flex center'>
        <div className="login-container flex">
            <div className="login-left"></div>
            <div className="login-right flex column">
                <h2>Welcome Back!!</h2>
                <div className='login-input-container flex column center spaceBetween'>
                    <input type="text" name="email" id="email" placeholder='Email' className='login-input-text login-input'/>
                    <input type="password" name="password" id="password" placeholder='Password' className='login-input-text login-input'/>
                    <button className='login-input login-button'>Login</button>
                </div>
                <span>
                    Don't have an account? 
                    <button className='register-login-button' onClick={openRegister}>Register</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Login
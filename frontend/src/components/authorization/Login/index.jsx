import React, { useState } from 'react'
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
    const [data,setData] = useState({
        email: "",
        password: "",
    })
    const [error,setError] =useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const openRegister = () => {
        navigate("/register");
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }
    const checkData = () => {
        const email = data.email;
        const password = data.password;

        if(!email || !password){
            setError("Please fill all fields")
        }
        else{
            handleLogin()
        }
    }
    const openHome = () => {
        navigate("/home");
    }
    const handleLogin = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/login",data)
            if(response.data.status === "success"){
                localStorage.setItem("token",response.data.authorisation.token)
                setData({
                  email: "",
                  password: "",
                })
                openHome()
              }
        }
        catch(err){
            setError("email or passowrd invalid")
            setData({
                email: "",
                password: "",
            })
        }
        
    }
  return (
    <div className='page flex center'>
        <div className="login-container flex">
            <div className="login-left"></div>
            <div className="login-right flex column">
            {error ? 
                <h2 className='login-warning'>
                    {error}
                </h2> : <h2>Welcome Back!!</h2>}
                <div className='login-input-container flex column center spaceBetween'>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder='Email' 
                    className='login-input-text login-input'
                    onChange={handleChange}
                    value={data.email}
                    />
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Password' 
                    className='login-input-text login-input'
                    onChange={handleChange}
                    value={data.password}
                    />
                    <button className='login-input login-button' onClick={checkData}>Login</button>
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
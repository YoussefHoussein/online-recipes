import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import './style.css'
const Register = () => {
  const [data,setData] = useState({
    name: "",
    email: "",
		password: "",
  })
  const [error,setError] =useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const location = useLocation();
  const navigate = useNavigate();
  const openRegister = () => {
    navigate("/home");
  }
  const checkData = () => {
    const name = data.name
    const email =data.email
    const password = data.password

    if(!name || !email || !password){
      setError("Please fill all fields")
    }
    else if(password.length < 6 ){
      setError("Password should be more than 6 characters")
    }
    else{
      handleRegister()
    }
  }
  const handleRegister = async () => {
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/register',data)
      console.log(response.data)
      if(response.data.message === "User created successfully"){
        localStorage.setItem("token",response.data.authorisation.token)
        setData({
          name: "",
          email: "",
          password: "",
        })
        openRegister()
      }
    }
    catch(error){
      console.log("error: "+error)
      setError("email or passowrd invalid")
      setData({
        name: "",
        email: "",
        password: "",
      })
    }
    
    
    
  }
  return (
    <div className="page flex center">
      <div className="register-container flex">
        <div className="register-left"></div>
        <div className="register-right flex column spaceEvenly">
          {error ? 
          <h2 className='register-warning'>
            {error}
          </h2> : <h2>Welcome to Online Recipes</h2>}
          
          <div className="register-input-container flex column center spaceEvenly">
              <input
               type="text" 
               name="name" 
               id="name" 
               placeholder='Name' 
               className='register-input-text register-input' 
               value={data.name} 
               onChange={handleChange}
               />
              <input 
              type="text" 
              name="email" 
              id="email"
              placeholder='Email' 
              className='register-input-text register-input' 
              value={data.email} 
              onChange={handleChange}
              />
              <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Password' 
              className='register-input-text register-input'
              value={data.password}
              onChange={handleChange}
              />
              <button className='register-input register-button' onClick={checkData}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
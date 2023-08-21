import React, { useState } from 'react'
import './style.css'
const Navbar = ({setNav}) => {
    const [selected , setSelected] = useState("Home");
    const handleClick = (text) => {
        setSelected(text)
        setNav(text)
    }
    
  return (
    <div className='navbar flex spaceAround'>
        <div className="navbar-items flex center spaceBetween">
            <button className={selected == "Home" ? 'item-button selected' : 'item-button'} onClick={() => handleClick("Home")}>Home</button>
            <button className={selected == "Profile" ? 'item-button selected' : 'item-button'} onClick={() => handleClick("Profile")}>Profile</button>
            <button className={selected == "Shopping List" ? 'item-button selected' : 'item-button'} onClick={() => handleClick("Shopping List")}>Shopping List</button>
            <button className={selected == "Calendar" ? 'item-button selected' : 'item-button'} onClick={() => handleClick("Calendar")}>Calendar</button>
        </div>
        <div className="search flex center">
            <input type="text" placeholder='Search' className='search-bar'/>
        </div>
    </div>
  )
}

export default Navbar
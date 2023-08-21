import React from 'react'
import './style.css'
const Navbar = ({selected = "Home"}) => {
  return (
    <div className='navbar flex spaceAround'>
        <div className="navbar-items flex center spaceBetween">
            <button className={selected == "Home" ? 'item-button selected' : 'item-button'}>Home</button>
            <button className={selected == "Profile" ? 'item-button selected' : 'item-button'}>Profile</button>
            <button className={selected == "Shopping List" ? 'item-button selected' : 'item-button'}>Shopping List</button>
        </div>
        <div className="search flex center">
            <input type="text" placeholder='Search' className='search-bar'/>
        </div>
    </div>
  )
}

export default Navbar
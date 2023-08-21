import React, { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import Profile from './profile'
import ShoppingList from './shoppingList'
const Dashboard = () => {
  const [nav , setNav] = useState("Home")
  const handleSelectItem = (item) => {
    setNav(item);
  };

  return (
    <>
    <Navbar setNav={handleSelectItem}/>
    <div>
      {nav == "Home" ? <Home /> : nav == "Profile" ? <Profile /> : <ShoppingList />}
    </div>
    </>
    
    
  )
}

export default Dashboard
import React, { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import Profile from './profile'
import ShoppingList from './shoppingList'
import Calendar from './calendar'
const Dashboard = () => {
  const [nav , setNav] = useState("Home")
  const handleSelectItem = (item) => {
    setNav(item);
  };

  return (
    <>
    <Navbar setNav={handleSelectItem}/>
    <div>
      {nav == "Home" ? <Home /> : nav == "Profile" ? <Profile /> : nav == "Shopping List" ? <ShoppingList />: <Calendar />}
    </div>
    </>
    
    
  )
}

export default Dashboard
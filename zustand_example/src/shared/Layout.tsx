import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='grow bg-secondary-100'><Outlet /></div>
    </div>
    
  )
}

export default Layout
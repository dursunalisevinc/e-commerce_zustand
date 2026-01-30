import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='px-[1.5rem] py-[1rem] bg-primary-600 py-4'>
        Kategoriler
      </div>
      <div className='grid grid-cols-12 grow bg-secondary-100'>
        <div className='col-span-3 bg-white p-[1.5rem]'>
          <div className='h-full flex flex-col gap-4'>
            <div className='h-[10rem] bg-primary-200'>sdsd</div>
             <div className='h-[4rem] bg-primary-500'>sdsd</div>
            <div className='grow overflow-y-auto bg-primary-800' >bgpsd</div>
            <div className='h-[3rem] bg-primary-300'>sdsd</div>
          </div>
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Layout
import React from 'react'
import SideBar from '../../layouts/admin/SideBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../../layouts/admin/Navbar'
import Footer from '../../layouts/admin/Footer'

export default function AdminIndex() {
  return (
    <div className='wrapper'>
        <SideBar/>
        <div className="page-content">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
        
    </div>
  )
}

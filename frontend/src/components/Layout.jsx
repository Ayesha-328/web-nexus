import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import  Footer  from './Footer'

const Layout = () => {
  return (
    <>
     <div className="relative w-full">
  <Header />
    {/* Main content */} 
    <Outlet />  
     </div>
  <Footer/>
    
    </>
  )
}

export default Layout
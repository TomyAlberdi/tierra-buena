import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
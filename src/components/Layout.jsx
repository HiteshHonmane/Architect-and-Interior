import React from 'react'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Logo from './Logo'
const Layout = ({children}) => {
  return (
    <>
        <Logo/>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout
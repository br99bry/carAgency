import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsApp from '../components/WhatsApp';


const Layout = (props) => {
  return (
    <>
      <WhatsApp />
      <Navbar />
        {props.children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout;
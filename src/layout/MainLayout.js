import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout(props) {
  return (
    <div style={{position: "relative", width: "100%", height: "100vh"}}>
        <Navbar></Navbar>
            {props.children}
        <Footer></Footer>
    </div>
  )
}

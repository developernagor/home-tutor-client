import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

function MainLayout() {

  useEffect(()=>{

    const hasVisited = localStorage.getItem("hasVisited")

    if(!hasVisited) {
      alert("ওয়েবসাইট এর কাজ চলমান রয়েছে")

      localStorage.setItem("hasVisited", "true")
    }

  },[])
  return (
    <div>
    <Navbar></Navbar>
      <div className='min-h-[calc(100vh-430px)]'>
      <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout

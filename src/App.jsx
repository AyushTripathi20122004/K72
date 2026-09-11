import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Agency from './Pages/Agency'
import Work from './Pages/Work'
import Home from './Pages/Home'
import Nav from './Components/Navbar/Nav'
import FullScreenNav from './Components/Navbar/FullScreenNav'
import Footer from './Components/Footer/Footer'
// lenis inigation
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

const App = () => {

  return (
    <div className='relative'>
      <ReactLenis root>
        <Nav />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/agency' element={<Agency />} />
        </Routes>
        <Footer />
      </ReactLenis>
    </div>
  )
}

export default App

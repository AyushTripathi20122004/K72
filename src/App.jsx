import React from 'react'
import { Routes,Route } from "react-router-dom"
import Agency from './Pages/Agency'
import Work from './Pages/Work'
import Home from './Pages/Home'
import Nav from './Components/Navbar/Nav'
import FullScreenNav from './Components/Navbar/FullScreenNav'

const App = () => {
  return (
    <div className='relative'>
      <Nav />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/agency' element={<Agency />} />
      </Routes>

    </div>
  )
}

export default App

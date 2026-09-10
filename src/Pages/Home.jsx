import React, { useContext } from 'react'
import Video from '../Components/Home/Video'
import HomeTopText from '../Components/Home/HomeTopText'
import HomeBottomText from '../Components/Home/HomeBottomText'
import HomeCenterText from '../Components/Home/HomeCenterText'
import { NavDataContaxt } from '../Components/NavContaxtSection/NavContaxt'

const Home = () => {
  const Data = useContext(NavDataContaxt)
  return (
    <div className={`relative ${Data.OpenNav === false ? 'block' : 'hidden'}`}>
      <div className=' fixed h-screen w-screen'>
        <Video />
      </div>
      <div className=' h-screen w-screen flex flex-col justify-between items-center relative'>
        <HomeTopText />
        <HomeCenterText />
        <HomeBottomText />
      </div>

      
    </div>
  )
}

export default Home

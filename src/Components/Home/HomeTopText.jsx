import React from 'react'

import HomeVideo from '../../Videos/HomeVideo.mp4'

const HomeTopText = () => {
  return (
    <div className='lg:mt-0 mt-[120vw] '>
      <div className='text-center font-[font1] uppercase  lg:text-[9vw] text-[12vw]  lg:leading-[8vw] leading-[10vw] text-white'>The spark for</div>
      <div className='text-center font-[font1]  uppercase lg:text-[9vw]  text-[12vw] lg:leading-[8vw] leading-[10vw] flex items-center text-white'>
        <div>all</div>
        <div className="mx-[1vw] lg:h-[12vh] h-[10vw]  lg:w-[20vw] w-[30vw] overflow-hidden  rounded-full border border-white/10 ">
          <video loop autoPlay muted className='h-full rounded-full  w-full object-cover' src={HomeVideo}></video>
        </div>
        <div>things</div>
      </div>
      <div className='text-center  font-[font1] uppercase   text-[9vw] lg:leading-[8vw] leading-[10vw] text-white'>creative</div>
    </div>
  )
}

export default HomeTopText

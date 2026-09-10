import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='lg:mb-1 mb-4 flex gap-4'>
      <Link className='text-[5.5vw] leading-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] pt-2 uppercase  font-[font2] rounded-full border-5 border-white text-white lg:px-20 px-14' to='/work'>Work</Link>
      <Link className='text-[5.5vw] leading-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] pt-2 font-[font2] uppercase   rounded-full border-5 border-white text-white lg:px-20 px-14' to='/agency'>Agency</Link>
    </div>
  )
}

export default HomeBottomText

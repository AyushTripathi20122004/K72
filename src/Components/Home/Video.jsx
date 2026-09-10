import React from 'react'
import HomeVideo  from '../../Videos/HomeVideo.mp4'
const Video = () => {
  return (
      <video loop autoPlay muted className='h-full  w-full object-cover' src={HomeVideo}></video>
  )
}

export default Video

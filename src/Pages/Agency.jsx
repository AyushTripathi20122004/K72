import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AgSection1 from '../Components/Agency/AgSection1'
import AgSection2 from '../Components/Agency/AgSection2'
import AgSection3 from '../Components/Agency/AgSection3'
gsap.registerPlugin(ScrollTrigger)
const Agency = () => {
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.AgCardWrapper',
        markers: false,
        start: 'top top',
        end:'+=100',
        scrub:true        
      },
    })

    tl.to('.AgParant,.AgCardWrapper', {
      backgroundColor: 'black',
      duration: 0.25,
    })

    ScrollTrigger.refresh()
   
  }, [])

  return (
    <div id='top' className='AgParant h-full w-full'>
      <AgSection1 />
      <AgSection2 />
      <AgSection3 />
    </div>
  )
}

export default Agency

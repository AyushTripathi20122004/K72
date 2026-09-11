import React, { useContext, useEffect } from 'react'
import FullScreenNav from '../Components/Navbar/FullScreenNav'
import { WorkCard } from '../../src/ArrayData/Data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { NavDataContaxt } from '../Components/NavContaxtSection/NavContaxt'

gsap.registerPlugin(ScrollTrigger)


const Work = () => {

  const Data = useContext(NavDataContaxt)
  

  useGSAP(() => {
    const mm = gsap.matchMedia();// return the screen size

    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray(".WorkCard").forEach((card) => {
        gsap.from(card, {
          scaleY: 0.3,
          ease: "power4.out",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "+=500",
            markers:false,
            scrub: true,
            onUpdate: () => { ScrollTrigger.refresh() }
          },
        });
      });
    });

    return () => mm.revert();
  });

  return (
    <div id='top' className={`${Data.OpenNav === false ? 'block' : 'hidden'} w-screen py-1 h-full font-[font1]  `}>
      <div className='mt-[20vw] px-[1vw]'>
        <div className='flex'>
          <h1 className='text-[17vw] leading-[12vw]'>Work</h1>
          <div className=' text-[4vw]'>17</div>
        </div>
        <div className='WorkCardWrapper flex w-full  flex-col gap-[1vw]'>
          {
            WorkCard.map((elem, idx) => {
              return (
                <div key={idx} className='WorkCard items-start  lg:flex gap-[1vw] lg:h-[32vw] h-[64vw] ' >
                  <div className='relative h-full lg:w-1/2 bg-gray-100 transition-all duration-300 overflow-hidden group hover:rounded-[4vw] '>
                    <div className='h-full flex shrink-0 w-full '>
                      <img className='h-full group-hover:scale-105 transition-all duration-300 w-full object-cover' src={elem.Image1} alt="" />
                    </div>
                    <div className='uppercase  opacity-0 text-white  transition-all duration-300 text-[4vw] px-[1vw] pt-[1vw] leading-[3.2vw] text-nowrap group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-full'>
                      View Projects
                    </div>
                  </div>
                  <div className={`relative ${elem.Image2 ? 'block' : 'hidden'} h-full   lg:w-1/2 bg-gray-100 transition-all duration-300 overflow-hidden group hover:rounded-[4vw] `}>
                    <div className='h-full w-full '>
                      <img className='h-full group-hover:scale-105   transition-all duration-300 w-full object-cover' src={elem.Image2} alt="" />
                    </div>
                    <div className='uppercase opacity-0 text-white  transition-all duration-300 text-[4vw] px-[1vw] pt-[1vw] leading-[3.2vw] text-nowrap group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-full'>
                      View Projects
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Work

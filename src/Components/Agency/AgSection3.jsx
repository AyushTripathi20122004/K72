import React from 'react'
import { Link } from 'react-router-dom'
import {ProjetCard} from '../../ArrayData/Data'
const AgSection3 = () => {
    return (
        <div className='relative  font-[font2] pt-[10vw]'>

            {/* cards */}
            <div className='relative'>
                <div className='sticky lg:top-[2vw] top-[14vw] z-10 lg:mt-[2vw] mt-[10vw] flex w-full justify-center '>
                    <Link to='/Projects' className='uppercase text-white lg:text-[2vw] text-[6vw]' >View all projects</Link>
                </div>
                {
                    ProjetCard.map((elem, idx) => {

                        return (
                            <div key={idx} className='h-screen group  sticky top-[-2vw]  lg:w-screen'>

                                <div className='h-full  w-full rounded-[4vw] overflow-hidden'>
                                    <img className='h-full group-hover:scale-105  transition-all duration-300 w-full object-cover' src={elem.image} alt="" srcset="" />
                                </div>
                                <div className='absolute top-1/2 left-1/2 leading-[4.5vw]  text-center text-white  -translate-x-1/2 -translate-y-1/2'>
                                    <span className='text-[3vw]'>{elem.title}</span>
                                    <h2 className='text-[7vw] text-nowrap'>{elem.Heading}</h2>

                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default AgSection3

import React, { useContext, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavDataContaxt } from '../NavContaxtSection/NavContaxt'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Nav = () => {
    const HoverRef = useRef(null)
    const SvgRef = useRef(null)

    const CurrentRoute = useLocation().pathname

    const Data = useContext(NavDataContaxt);



    return (
        <div className='relative'>
            <div className=" fixed z-20 top-0 flex w-full justify-between">


                <Link to={'/'} className='p-2'>
                    <svg ref={SvgRef} xmlns="http://www.w3.org/2000/svg" width="103" height="44" fill={CurrentRoute === '/' ? 'white' : 'black'} viewBox="0 0 103 44">
                        <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </Link>
                <div

                    onMouseEnter={() => {
                        HoverRef.current.style.height = '3rem'
                    }}
                    onMouseLeave={() => {
                        HoverRef.current.style.height = '0rem'
                    }}
                    className='h-12 relative '>
                    <div className="text-2xl flex justify-end items-center relative w-48 h-full  bg-black" aria-label="Menu">
                        <div className='w-20 flex flex-col items-end mr-5 gap-1'>
                            <div className='w-full h-0.5 bg-white'></div>
                            <div className='w-1/2 h-0.5 bg-white'></div>
                        </div>
                    </div>
                    <div
                        onClick={() => { Data.SetNav(true) }}
                        ref={HoverRef}
                        className="text-2xl transition-all  flex justify-end items-center duration-75 absolute h-0 top-0 w-48  bg-[#D3FD50]">
                        <div className='w-20 relative flex flex-col items-end mr-5 gap-1'>
                            <div className='w-full h-0.5 bg-black'></div>
                            <div className='w-1/2 h-0.5 bg-black'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav

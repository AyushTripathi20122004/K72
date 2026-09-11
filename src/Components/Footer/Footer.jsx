import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const RouteSearch = useLocation().pathname
    return (
        <div className={`lg:h-[30vw] ${RouteSearch === '/' ? 'hidden' : 'flex'} lg:px-0 px-[4vw] flex-col justify-between w-full bg-black text-white p-[1vw] font-[font2] lg:gap-0 gap-[7vw]`}>
            <div className='flex lg:justify-between lg:flex-row lg:gap-0 gap-[80vw] flex-col'>
                <div className='flex gap-[1vw] lg:mt-0 mt-[4vw] lg:justify-center  '>
                    <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-2 border-white flex items-center pt-[1vw] h-[8vw]    lg:text-[6vw] text-[8vw] lg:px-[1vw] px-[2vw] '>
                        <span className='uppercase'>fb</span>
                    </div>
                    <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-2 border-white flex items-center pt-[1vw] h-[8vw]   lg:text-[6vw] text-[8vw] lg:px-[1vw] px-[2vw]  '>
                        <span className='uppercase'>ig</span>
                    </div>
                    <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-2 border-white flex items-center pt-[1vw] h-[8vw]   lg:text-[6vw] text-[8vw] lg:px-[1vw] px-[2vw]  '>
                        <span className='uppercase'>in</span>
                    </div>
                    <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-2 border-white flex items-center pt-[1vw] h-[8vw]   lg:text-[6vw] text-[8vw] lg:px-[1vw] px-[2vw]'>
                        <span className='uppercase'>be</span>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-2 border-white flex items-center pt-[1vw] w-1/2  lg:h-[6vw]  lg:text-[6vw] text-[8vw] lg:px-[2vw] px-[4vw]  '>
                        <span className='uppercase'>Contact</span>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-0 gap-[6vw] justify-between lg:mb-0 mb-[6vw]'>
                <div className=' group flex  justify-center items-center gap-[1vw] uppercase text-[3vw] lg:text-[1.5vw]'>
                    <div><svg className='group-hover:text-[#D3FD50]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg></div>
                    <span className='Montreal group-hover:text-[#D3FD50]'>MONTREAL_4:30</span>
                </div>

                <div className='flex lg:flex-row flex-col lg:items-center justify-center   gap-[1vw]  uppercase text-[3vw] lg:text-[1vw]'>
                    <Link to='/' className='hover:text-[#D3FD50]'>Privacy policy</Link>
                    <Link to='/work' className='hover:text-[#D3FD50]'>Privacy notice</Link>
                    <Link to='/about' className='hover:text-[#D3FD50]'>Ethics Report</Link>
                    <Link to='/contact' className='hover:text-[#D3FD50]'>Concent Choices</Link>

                </div>

                <div className='flex items-center justify-center'>
                    <a href="#top" className='uppercase lg:text-[1vw] text-[3vw] hover:text-[#D3FD50]'>Back to top</a>
                </div>
            </div>
        </div>
    )
}

export default Footer

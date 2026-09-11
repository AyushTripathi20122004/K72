import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

import { data } from '../../ArrayData/Data'
import { NavDataContaxt } from '../NavContaxtSection/NavContaxt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FullScreenNav = () => {

    const refs = useRef([]);

    const Data = useContext(NavDataContaxt);
    const StairRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.stair1', {
            height: 0,
            stagger: {
                amount: -0.25,
            },
        })
        tl.from('.Navigation', {
            delay:0.5,
            opacity: 0
        })
        tl.from('.NavLink', {
            rotateX:-90,
            opacity:0,
            stagger:0.15,

        })
        tl.from('.FSNfooter', {
            opacity:0,
            stagger:0.15,
        })

    },[Data.OpenNav]);

    return (
        <div className={` ${Data.OpenNav === true ? 'block' : 'hidden'}  py-1 h-screen overflow-hidden z-20 absolute top-0 left-0  w-screen   `}>

            <div ref={StairRef} className="absolute top-0 h-full w-full  ">
                <div className='flex h-full w-full'>
                    <div className="h-full stair1 bg-black w-1/5" />
                    <div className="h-full stair1 bg-black w-1/5" />
                    <div className="h-full stair1 bg-black w-1/5" />
                    <div className="h-full stair1 bg-black w-1/5" />
                    <div className="h-full stair1 bg-black w-1/5" />
                </div>
            </div>

            <div className='Navigation relative'>

                <div className='flex lg:h-[10vw] h-[30vw]  border-white justify-between'>

                    <Link to={'/'} className='p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" fill='white' viewBox="0 0 103 44">
                            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </Link>

                    <div onClick={() => { Data.SetNav(false) }} className='flex lg:mr-0 mr-2  group items-center lg:w-[10vw] w-[20vw] h-full  justify-between border-white'>
                        <div className='group-hover:bg-[#D3FD50] transition-all duration-300 h-full  w-[0.1vw] origin-top lg:translate-x-4.5 -translate-x-3 translate-y-3  lg:translate-y-3 -rotate-45 bg-white'></div>
                        <div className='h-full group-hover:bg-[#D3FD50] transition-all duration-300 w-[0.1vw] origin-top  rotate-45  -translate-x-3 translate-y-4 lg:-translate-x-4.5 lg:translate-y-3 bg-white'></div>
                    </div>

                </div>

                <div className=' relative font-[font2] lg:mt-0 mt-[40vw]'>
                    {
                        data.map((elem, idx) => {
                            return (
                                <Link to={`/${elem.Heading.toLowerCase()}`} key={idx}
                                    onMouseEnter={() => {
                                        refs.current[idx].style.height = '7.4vw'

                                    }}

                                    onClick={() => { Data.SetNav(false) }}

                                    onMouseLeave={() => {
                                        refs.current[idx].style.height = '0vw'
                                    }}
                                    className='NavLink origin-top  border-y-[0.05vw]  border-white/50 lg:leading-[2vw] leading-[7vw] flex flex-col items-center'>

                                    <div className='  lg:mt-[3.2vw] mt-[4vw] text-white uppercase'>
                                        <Link to='/work' className=' lg:text-[8vw] text-[14vw]'>{elem.Heading}</Link>
                                    </div>

                                    <div ref={(el) => (refs.current[idx] = el)} className='h-0   transition-all w-full overflow-hidden  duration-100 absolute flex bg-[#D3FD50]  text-black'>
                                        <div className='flex move'>
                                            <div className='flex  items-center h-full  leading-[2vw] '>
                                                <div className='w-[17vw] h-[6vw]   mx-[2vw]  rounded-full overflow-hidden'>
                                                    <img className={`h-full  w-full    object-cover ${idx === 1 ? 'object-[center_-3vw]' : ''}`}
                                                        src={elem.image1} alt="" />
                                                </div>
                                                <h2 className='uppercase text-[8vw] whitespace-nowrap mt-[1vw] '>{elem.text}</h2>
                                            </div>
                                            <div className='flex items-center  h-full leading-[2vw] '>
                                                <div className='w-[17vw] mx-[2vw] h-[6vw]  rounded-full overflow-hidden'>
                                                    <img className={`h-full  w-full    object-cover ${idx === 1 ? 'object-[center_-3vw]' : ''}`} src={elem.image2} alt="" />
                                                </div>
                                                <h2 className=' text-[8vw] whitespace-nowrap uppercase mt-[1vw] '>{elem.text}</h2>
                                            </div>
                                            <div className='flex  items-center h-full  leading-[2vw] '>
                                                <div className='w-[17vw] h-[6vw]   mx-[2vw]  rounded-full overflow-hidden'>
                                                    <img className={`h-full  w-full    object-cover ${idx === 1 ? 'object-[center_-3vw]' : ''}`}
                                                        src={elem.image1} alt="" />
                                                </div>
                                                <h2 className='uppercase text-[8vw] whitespace-nowrap mt-[1vw] '>{elem.text}</h2>
                                            </div>
                                            <div className='flex items-center  h-full leading-[2vw] '>
                                                <div className='w-[17vw] mx-[2vw] h-[6vw]  rounded-full overflow-hidden'>
                                                    <img className={`h-full  w-full    object-cover ${idx === 1 ? 'object-[center_-3vw]' : ''}`} src={elem.image2} alt="" />
                                                </div>
                                                <h2 className=' text-[8vw] whitespace-nowrap uppercase mt-[1vw] '>{elem.text}</h2>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='lg:mt-[6.5vw] FSNfooter mt-[40vw]  px-[1vw] lg:flex items-center justify-between  text-white font-[font2]'>
                    <div className=' group lg:flex hidden justify-center items-center gap-[1vw] uppercase text-[1.5vw]'>
                        <div><svg className='group-hover:text-[#D3FD50]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg></div>
                        <span className='Montreal group-hover:text-[#D3FD50]'>MONTREAL_4:30</span>
                    </div>

                    <div className='flex lg:flex-row flex-col items-center justify-center   gap-[1vw] pl-[4vw] uppercase text-[2.5vw] lg:text-[1vw]'>
                        <Link to='/' className='hover:text-[#D3FD50]'>Privacy policy</Link>
                        <Link to='/work' className='hover:text-[#D3FD50]'>Privacy notice</Link>
                        <Link to='/about' className='hover:text-[#D3FD50]'>Ethics Report</Link>
                        <Link to='/contact' className='hover:text-[#D3FD50]'>Concent Choices</Link>

                    </div>

                    <div className='flex gap-[1vw] lg:mt-0 mt-[4vw] justify-center  '>
                        <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-4 border-white flex items-center pt-[0.5vw] lg:h-[4vw] h-[10vw]  lg:text-[2.6vw] text-[4vw] lg:px-[1vw] px-[6vw]  '>
                            <span className='uppercase'>fb</span>
                        </div>
                        <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-4 border-white flex items-center pt-[0.5vw] lg:h-[4vw] h-[10vw]  lg:text-[2.6vw] text-[4vw] lg:px-[1vw] px-[6vw]   '>
                            <span className='uppercase'>ig</span>
                        </div>
                        <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-4 border-white flex items-center pt-[0.5vw] lg:h-[4vw] h-[10vw]  lg:text-[2.6vw] text-[4vw] lg:px-[1vw] px-[6vw]   '>
                            <span className='uppercase'>in</span>
                        </div>
                        <div className='rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] border-4 border-white flex items-center pt-[0.5vw] lg:h-[4vw] h-[10vw]  lg:text-[2.6vw] text-[4vw] lg:px-[1vw] px-[6vw] '>
                            <span className='uppercase'>be</span>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default FullScreenNav

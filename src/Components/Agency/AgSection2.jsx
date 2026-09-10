import gsap from 'gsap'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { EmployeeCard } from '../../ArrayData/Data'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const AgSection2 = () => {

    const MrqFirstRef = useRef([]);
    const MrqSecondRef = useRef([]);
    const EmpCardRef = useRef([]);

    useGSAP(() => {
        const firstRefs = MrqFirstRef.current.filter(Boolean);
        const secondRefs = MrqSecondRef.current.filter(Boolean);

        firstRefs.forEach((item) => {
            gsap.to(item, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        secondRefs.forEach((item) => {
            gsap.to(item, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });
    }, { dependencies: [EmployeeCard] });

    return (
        <div className=' AgCardWrapper  py-1 flex lg:gap-0 gap-[10vw]    w-full  relative flex-col items-center font-[font2]'>

            {
                EmployeeCard.map((elem, idx) => {
                    return (
                        <div key={idx} ref={(ele) => { EmpCardRef.current[idx] = ele }} className='mt-[30vw]  overflow-x-hidden lg:sticky relative top-0 w-screen  lg:h-screen h-[80vw]'>

                            <div className='h-full w-full AgCard flex flex-col  items-center  '>
                                <div className='h-full relative w-[60vw]  lg:w-[30vw]'>
                                    <div ref={(ele) => { MrqFirstRef.current[idx] = ele }} className='move1   absolute overflow-hidden '>
                                        <div className='  flex gap-[20vw] lg:gap-[40vw]'>
                                            <span className='text-[9vw]  text-nowrap uppercase text-[#D3FD50]'>
                                                {elem.text1}
                                            </span>
                                            <span className='text-[9vw] text-nowrap    uppercase text-[#D3FD50]'>
                                                {elem.text1}
                                            </span>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className='relative  rounded-3xl overflow-hidden  h-full w-full'>
                                        <img className='h-full w-full object-cover' src={elem.image} alt="" srcset="" />
                                    </div>
                                </div>
                                <div ref={(ele) => { MrqSecondRef.current[idx] = ele }} className='move2 absolute top-[20vw] '>
                                    <div className=' flex gap-[20vw] lg:gap-[40vw]'>
                                        <div className=' uppercase  text-[#D3FD50]'>
                                            <span className='text-[9vw] mr-[10vw]'>{elem.EmpName}</span>
                                            <span className='text-[2.5vw] font-[font2] text-white text-nowrap'>Account Manager</span>
                                        </div>
                                        <div className='  uppercase text-[#D3FD50]'>
                                            <span className='text-[9vw] mr-[10vw]'>{elem.EmpName}</span>
                                            <span className='text-[2.5vw] font-[font2] text-white text-nowrap'>{elem.Post}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AgSection2

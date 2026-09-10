import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


const AgSection1 = () => {
    let ImageLink = [
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
        'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
    ]

    gsap.registerPlugin(ScrollTrigger)

    const ImageDivRef = useRef(null);
    const ImageRef = useRef(null);

    useGSAP(() => {

        // Preload first few images for smooth animation
        const preloadImages = ImageLink.slice(0, 3);
        preloadImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        gsap.to(ImageDivRef.current, {
            scrollTrigger: {
                trigger: ImageDivRef.current,
                markers: false,
                start: 'top 28.5%',
                end: 'top -180%',
                pin: true,
                anticipatePin: 1,
                pinReparent: true,
                pinSpacing: true,
                pinType: 'transform',
                scrub: 2,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                   
                    let imgIndex;

                    if (elem.progress < 1) {
                        imgIndex = Math.floor(elem.progress * ImageLink.length);
                    }
                    else {
                        imgIndex = ImageLink.length - 1
                    }

                    // Preload next image for smooth transition
                    if (imgIndex < ImageLink.length - 1) {
                        const nextImg = new Image();
                        nextImg.src = ImageLink[imgIndex + 1];
                    }

                    ImageRef.current.src = ImageLink[imgIndex];
                }
            }
        })
    })


    return (
        <div className='Parant'>
            <div className='AgSection1  py-1  font-[font2] '>

                <div ref={ImageDivRef} className='absolute top-0  left-[30vw] w-[14.5vw] h-[20vw] rounded-3xl overflow-hidden'>
                    <img ref={ImageRef} className='h-full w-full object-cover' src={ImageLink[0]} alt="" />
                </div>

                {/* text area  */}
                <div className='relative'>
                    {/* heading and para */}
                    <div className=''>
                        <div className=' lg:mt-[57vh] mt-[27vw] '><h1 className='text-[20vw] text-center leading-[17vw]'>SEVEN7Y <br /> TWO</h1></div>
                        <div className='flex justify-end'>
                            <p className='w-[58vw] text-[4vw] leading-[4vw]'>{"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"}{"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"}We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                        </div>
                    </div>

                    <div className='px-[10vw] mt-[20vw]'>
                        <div className='lg:text-[1.5vw] grid grid-cols-3 gap-8 mt-20 px-8'>
                            <div>
                                <h2 className=' lg:leading-[8vw]'>Experties</h2>
                            </div>
                            <div className=''>
                                <div className=' lg:leading-[2.5vw]'>
                                    <ul>
                                        <li>Strategy</li>
                                        <li>Advertising</li>
                                        <li>Branding</li>
                                        <li>Design</li>
                                        <li>Content</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-3 flex flex-col gap-4 lg:gap-10 mt-20 lg:px-8 lg:text-[1.5vw]'>
                            <div>
                                <p>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
                            </div>
                            <div>
                                <p>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
                            </div>
                            <div>
                                <p>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default AgSection1

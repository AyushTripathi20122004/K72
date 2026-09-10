import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
    const StairsRef = useRef();
    const PageRef = useRef();
    const CurrentPath = useLocation().pathname
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(StairsRef.current, {
            display: 'block',
        })

        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25,
            },
        })
        gsap.from(PageRef.current,{
            display:'none',
            opacity:0,
            delay:1,
            scale:1.5
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25,
            },
        })
        tl.to(StairsRef.current, {
            display: 'none',
        })
        tl.to('.stair', {
            y: '0%',
        })

    },[CurrentPath])
    return (
        <div>
            <div ref={StairsRef} className=" fixed h-screen w-full top-0 z-10 ">
                <div className='flex h-full w-full'>
                    <div className="h-full stair bg-black w-1/5" />
                    <div className="h-full stair bg-black w-1/5" />
                    <div className="h-full stair bg-black w-1/5" />
                    <div className="h-full stair bg-black w-1/5" />
                    <div className="h-full stair bg-black w-1/5" />
                </div>
            </div>
            <div ref={PageRef}>
                {props.children}
            </div>
        </div>

    )
}

export default Stairs

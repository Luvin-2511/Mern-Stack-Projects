import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';

const StairAnimation = ({ children }) => {
    const location = useLocation();
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        });

        tl.set(overlayRef.current, { visibility: 'visible' });

        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2,
            },
            duration: 0.3,
            ease: 'none',
        });

        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.2,
            },
            duration: 0.3,
            ease: 'none',
        });

        tl.set(overlayRef.current, { visibility: 'hidden' });

        tl.set('.stair', { y: '0%' });

        gsap.from(contentRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.05,
            duration: 0.6,
            ease: 'power2.out',
        });
    }, [location.pathname]);

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none invisible"
            >
                <div className='h-[100vh] flex w-full  z-50 top-0'>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                    <div className='stair bg-black h-full w-1/7'></div>
                </div>
            </div>

            <div ref={contentRef}>
                {children}
            </div>
        </>
    );
};

export default StairAnimation;

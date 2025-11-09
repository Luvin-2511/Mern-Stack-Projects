import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navlinker = useRef(null)
    function shower() {
        navlinker.current.classList.remove('-top-[100%]')
        navlinker.current.classList.add('top-0')
    }
    function shower2() {
        navlinker.current.classList.remove('hidden')
        navlinker.current.classList.add('block')
    }
    function hider() {
        navlinker.current.classList.add('-top-[100%]')
        navlinker.current.classList.remove('top-0')
    }
    function hider2() {
        navlinker.current.classList.add('hidden')
    }
    const location = useLocation().pathname
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.to(".navanim", {
            scrollTrigger: {
                trigger: ".navanim",
                start: 'top top',
                end: 'bottom',
                scrub: 1,
                stagger: 1,
            },
            yPercent: -100,
        })
    }, [location])

    return (
        <div className={`w-full ${location == '/' ? "" : "fixed"}`}>
            <Link to='/'>
                <div className="left absolute top-0 z-10 ml-[0.7vw]">
                    <svg className='h-[4.5vw] w-[8vw]' xmlns="http://www.w3.org/2000/svg" fill={location == '/' ? "white" : "black"} width="113" height="48" viewBox="0 0 113 48">
                        <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </Link>



            {location == '/' ? (
                <div>
                    <div onClick={() => { shower() }} className="group absolute left-[calc(100%-15.5vw)]  z-11 top-0 bg-black cursor-pointer  h-[3.2vw] w-[15.5vw] flex flex-col items-end justify-center gap-[0.27vw] pr-8">
                        <div className="absolute h-full z-0 w-full group-hover:top-[0] bg-[#D3FD50] -top-[100%] transition-all right-0">
                        </div>
                        <div className="bg-white relative group-hover:bg-black  z-20 h-[0.09vw] w-[3vw] "></div>
                        <div className="bg-white relative group-hover:bg-black z-20 h-[0.09vw] w-[1.5vw]"></div>
                    </div>
                    <div ref={navlinker} className='h-[100vh] w-full bg-black absolute transition-all duration-300 -top-[100%] z-40'>
                        <div className="left absolute top-0  ml-[0.7vw]">
                            <svg className='h-[4.5vw] w-[8vw]' xmlns="http://www.w3.org/2000/svg" fill={location == '/' ? "white" : "black"} width="113" height="48" viewBox="0 0 113 48">
                                <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                        <div onClick={() => hider()} className='right cursor-pointer h-[5vw] transition-all  group'>
                            <div className='absolute right-[4vw]  top-0 mt-[0.1vw] mr-[0.3vw]'>
                                <div className='group-hover:bg-[#D3FD50] h-[9vw] w-[0.1vw] rotate-45 origin-center bg-white '></div>
                            </div>
                            <div className='absolute right-[4vw] top-0 mt-[0.1vw] mr-[0.3vw]'>
                                <div className='group-hover:bg-[#D3FD50] h-[9vw] w-[0.1vw] -rotate-45 origin-center bg-white '></div>
                            </div>
                        </div>
                        <div className='h-[35vw] mt-[5vw] flex flex-col  pt-[2.4vw] text-white text-[8vw] font-[Font2]'>
                            <div className='w-full group relative cursor-pointer trnasition-all  h-[7.5vw] text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Projets
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] ]'>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full cursor-pointer group h-[7.5vw] trnasition-all text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Agence
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] '>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full cursor-pointer group h-[7.5vw] trnasition-all text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                contact
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] '>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full cursor-pointer group  trnasition-all  h-[7.5vw] text-center leading-[9vw] border-b-[1px]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Blogue
                                <div className='group-hover:h-[7.5vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative h-0  bg-[#D3FD50] -top-[9vw]'>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute text-white uppercase text-[0.7vw] flex items-end gap-[1vw] justify-center left-[25vw] mt-[5vw] h-[4vw] w-[50vw] font-[Font2]'>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Politique de confidentialité
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Avis de confidentialité
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Rapport éthique
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Option de contentment
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='relative  top-0 z-[1000]'>
                    <div onClick={() => { shower() }}   className=" group absolute left-[calc(100%-15.5vw)]   top-0 bg-black cursor-pointer  h-[3.2vw] w-[15.5vw] flex flex-col items-end justify-center gap-[0.27vw] pr-8">
                        <div className="absolute h-full z-0 w-full group-hover:top-[0] bg-[#D3FD50] -top-[100%] transition-all right-0">
                        </div>
                        <div className="bg-white relative group-hover:bg-black  z-20 h-[0.09vw] w-[3vw] "></div>
                        <div className="bg-white relative group-hover:bg-black z-20 h-[0.09vw] w-[1.5vw]"></div>
                    </div>
                    <div>
                        <div onClick={()=>{shower2()}} className="navanim group absolute left-[calc(100%-15.5vw)]  z-11 top-0 bg-black cursor-pointer  h-[8vw] w-[15.5vw] flex flex-col items-end justify-start  gap-[0.27vw] pr-8">
                            <div className="absolute h-full z-0 w-full group-hover:top-[0] duration-200 bg-[#D3FD50] -top-[100%] transition-all right-0">
                            </div>
                            <div className="bg-white relative group-hover:bg-black  mt-[1.4vw] z-20 h-[0.09vw] w-[3vw] "></div>
                            <div className="bg-white relative group-hover:bg-black  z-20 h-[0.09vw] w-[1.5vw]"></div>
                            <h2 className='text-white group-hover:text-black flex justify-start absolute items-end h-full font-extrabold w-[13vw] font-[Font2] text-[1.3vw]'>
                                MENU
                            </h2>
                        </div>
                    </div>
                    <div>
                        <div className="navanim group absolute left-[calc(100%-65vw)]  z-9 top-0 bg-black cursor-pointer  h-[3.5vw] w-[65vw] flex flex-col items-end justify-start  gap-[0.27vw] pr-8">
                            <div className="absolute h-full z-0 w-full group-hover:top-[0] duration-200 bg-[#D3FD50] -top-[100%] transition-all right-0">
                            </div>
                            <h2 className='text-white group-hover:text-black flex justify-start absolute items-end h-full font-extrabold w-[62.5vw] font-[Font2] text-[1.3vw]'>
                                PROJETS(16)
                            </h2>
                        </div>
                    </div>
                    <div>
                        <div className="navanim group absolute left-[calc(100%-44.5vw)]  z-10 top-0 bg-black cursor-pointer  h-[5.5vw] w-[44.5vw] flex flex-col items-end justify-start  gap-[0.27vw] pr-8">
                            <div className="absolute h-full z-0 w-full group-hover:top-[0] duration-200 bg-[#D3FD50] -top-[100%] transition-all right-0">
                            </div>
                            <h2 className='text-white group-hover:text-black flex justify-start absolute items-end h-full font-extrabold w-[42vw] font-[Font2] text-[1.3vw]'>
                                AGENCE
                            </h2>
                        </div>
                    </div>
                    <div ref={navlinker} className='h-[100vw] w-full bg-black relative transition-all duration-300 hidden  z-[1000]'>
                        <div className="left absolute top-0  ml-[0.7vw]">
                            <svg className='h-[4.5vw] w-[8vw]' xmlns="http://www.w3.org/2000/svg" fill={location == '/' ? "white" : "black"} width="113" height="48" viewBox="0 0 113 48">
                                <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                        <div onClick={() => hider2()} className='right cursor-pointer h-[5vw] transition-all  group'>
                            <div className='absolute right-[4vw]  top-0 mt-[0.1vw] mr-[0.3vw]'>
                                <div className='group-hover:bg-[#D3FD50] h-[9vw] w-[0.1vw] rotate-45 origin-center bg-white '></div>
                            </div>
                            <div className='absolute right-[4vw] top-0 mt-[0.1vw] mr-[0.3vw]'>
                                <div className='group-hover:bg-[#D3FD50] h-[9vw] w-[0.1vw] -rotate-45 origin-center bg-white '></div>
                            </div>
                        </div>
                        <div className='h-[35vw] mt-[5vw] flex flex-col  pt-[2.4vw] text-white text-[8vw] font-[Font2]'>
                            <div className='w-full group relative cursor-pointer trnasition-all  h-[7.5vw] text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Projets
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] ]'>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full cursor-pointer group h-[7.5vw] trnasition-all text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Agence
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] '>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full cursor-pointer group h-[7.5vw] trnasition-all text-center leading-[9vw]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                contact
                                <div className='-top-[9vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative group-hover:h-[7.5vw] h-0   bg-[#D3FD50] '>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full cursor-pointer group  trnasition-all  h-[7.5vw] text-center leading-[9vw] border-b-[1px]  border-t-[1px] uppercase border-[#ffffff7d]'>
                                Blogue
                                <div className='group-hover:h-[7.5vw] group-hover:opacity-100 transition-all duration-300 opacity-0 flex relative h-0  bg-[#D3FD50] -top-[9vw]'>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                    <div className='absolute h-full top-0 flex moveX bg-[#D3FD50] w-full'>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"></img>
                                        </div>
                                        <h2 className='text-black shrink-0'>Pour tout voir</h2>
                                        <div className='h-[6vw] mx-[1vw] mt-[0.9vw] shrink-0 w-[18vw] mb-[1vw] rounded-full overflow-hidden'>
                                            <img autoPlay muted loop className='h-full w-full rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute text-white uppercase text-[0.7vw] flex items-end gap-[1vw] justify-center left-[25vw] mt-[5vw] h-[4vw] w-[50vw] font-[Font2]'>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Politique de confidentialité
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Avis de confidentialité
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Rapport éthique
                            </div>
                            <div className='hover:text-[#D3FD50] cursor-pointer'>
                                Option de contentment
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar

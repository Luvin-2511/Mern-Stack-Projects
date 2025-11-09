import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
    const homeRef = useRef(null)
    useGSAP(function(){
        gsap.from(homeRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.3
        })
    })
    return (
        <div ref={homeRef} className='relative overflow-hidden h-screen w-full '>
            <div className='absolute backgroundvideo top-0  h-screen w-full overflow-hidden'>
                <video autoPlay muted loop className=' w-full' src="../public/Video/mainpage.mp4"></video>
            </div>
            <div className='backgroundimage absolute top-[100%] h-screen w-full overflow-hidden'>
                <img src="../public/Image/mainpage.jpg" alt="" />
            </div>
            <div className='herotext flex items-center flex-col text-[9.5vw] mt-[1vw] leading-[8.5vw] font-[Font1]'>
                <div className='text-white relative uppercase'>
                    L'étincelle
                </div>
                <div className='text-white relative uppercase flex items-center'>
                    qui <div className='h-[7vw] w-[16vw] mb-[1vw] rounded-full overflow-hidden'>
                        <video autoPlay muted loop className='h-full w-full rounded-full object-cover' src="../public/Video/mainpage.mp4"></video>
                    </div>
                    génère
                </div>
                <div className='text-white relative uppercase'>
                    la créativité
                </div>
            </div>
            <div className="sidetext absolute text-white font-[Font1] text-[0.9vw] w-[14.5vw] flex mr-[1vw] mt-[5vw] right-0 text-start">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
            </div>
            <div className="bottom absolute font-[Font2] flex mt-[17vw] ml-[17vw] gap-[1.2vw]">
                <Link to='/projets'>
                    <div className="text-white h-[8.3vw] hover:text-[#D3FD50] cursor-pointer transition-all uppercase text-[6vw] border-2 rounded-full px-[3vw]">
                        Projets
                    </div>
                </Link>
                <Link to='/agence'>
                <div className="text-white h-[8.3vw] hover:text-[#D3FD50] cursor-pointer transition-all uppercase text-[6vw] border-2 rounded-full px-[3vw]">
                    Agence
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Home

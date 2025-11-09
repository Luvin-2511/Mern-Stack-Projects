import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
  ]

  const imagedivRef = useRef(null)
  const imageRef = useRef(null)
  const agenceRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(imagedivRef.current, {
      scrollTrigger: {
        trigger: imagedivRef.current,
        start: 'top 25.3%',
        end: 'top -110%',
        scrub: true,
        pin: true,
        onUpdate: (e) => {
          let imageIndex
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
          console.log(imageIndex)
          console.log(imageRef.current.src)
        }
      }
    })
  })


  return (
    <div ref={agenceRef} className='overflow-hidden min-h-screen  w-full bg-white'>
      <div ref={imagedivRef} className='absolute w-[15vw] z-1 ml-[31vw] mt-[13.5vw] rounded-2xl h-[19.5vw] overflow-hidden bg-black'>
        <img ref={imageRef} className='w-full h-full z-1 object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
      <div>
        <h1 className='text-black relative z-10 text-[20vw] mt-[29vw] text-center font-[Font2] leading-[17vw] uppercase'>Soixan7e <br />
          Douze
        </h1>
        <h2 className='w-[60vw] relative z-10 ml-[40vw] text-[3.5vw] leading-[3.4vw] text-black font-[Font2]'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </h2>
      </div>
      <div className='h-[200vh]'
      ></div>
    </div>
  )
}

export default Agence

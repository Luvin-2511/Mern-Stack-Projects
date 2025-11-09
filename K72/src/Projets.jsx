import React from 'react'
import Card from './components/Card'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const Projets = () => {
  const imgArray = [
    {
      image1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
    },
  ]

  // gsap.registerPlugin(ScrollTrigger)
  //   useGSAP(() => {
  //       gsap.from('.hero', {
  //           height:'100%',
  //           stagger:{
  //               amount:0.5
  //           },
  //           scrollTrigger:{
  //               trigger:'.lol',
  //               markers:true,
  //               scrub:true,
  //               start:'top top',
  //               end:'top -150%'
  //           }
  //       })
  //   })

  return (
    <div>
      <div className='uppercase text-[12vw] font-[Font2] ml-[1vw] mt-[14vw] mb-[15vw] relative pt-[10vw] '>
        Projets <sup className='text-[3vw] font-[Font1] absolute  top-[14vw]'>16</sup>
      </div>
      <div className='lol  w-full -mt-[15vw] h-full flex flex-col gap-[37vw] '>
        {imgArray.map((e,ind) => {
          return <div key={ind} className='hero relative bg-red-600 h-full  w-full -mt-[1vw] flex gap-[1vw] pl-[0.5vw]'>
          <Card image1={e.image1} image2={e.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projets

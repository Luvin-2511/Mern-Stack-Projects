

const Card = (props) => {
    
    return (
            <div className='relative h-0  w-full -mt-[1vw] flex gap-[1vw] pl-[0.5vw]'>
                <div className='group h-[35vw] w-[49vw] relative cursor-pointer overflow-hidden hover:rounded-[3vw] duration-300 transition-all'>
                    <img className='group-hover:scale-105 transition-all duration-300 h-full w-full object-cover' src={props.image1} alt="" />
                    <div className='group-hover:flex absolute hidden h-full  items-center justify-center w-full bg-[#00000033]  top-0'>
                        <div className='uppercase text-white font-[Font2] text-[4vw] w-[33vw] leading-[3.5vw] pt-[0.5vw] pl-[1vw] border-2 rounded-full   border-white '>
                            voir le projet
                        </div>
                    </div>
                </div>
                <div className='group h-[35vw] w-[49vw] relative cursor-pointer overflow-hidden hover:rounded-[3vw] duration-300 transition-all'>
                    <img className='group-hover:scale-105 transition-all duration-300 h-full w-full object-cover' src={props.image2} alt="" />
                    <div className='group-hover:flex absolute hidden h-full  items-center justify-center w-full bg-[#00000033]  top-0'>
                        <div className='uppercase text-white font-[Font2] text-[4vw] w-[33vw] leading-[3.5vw] pt-[0.5vw] pl-[1vw] border-2 rounded-full   border-white '>
                            voir le projet
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Card

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className = "relative z-10 py-30" id = "projects"> 
        <h1 className="heading"> 
        Recent Projects
        </h1>
        
     <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-10">
    {projects.map(({id,title,des,img,iconLists,link})=> (
        
        <div key={id} className={`${
            id === 1 ? 'block sm:flex' : 'hidden sm:flex'} sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex sm:items-center justify-center sm:w-[570px] w-[80vw]`}>
          <PinContainer title={title} href = {link}>
            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                    <img src="/bg.png" alt="bg-img"/>
                </div>
                <img
                src={img}
                alt={title}
                className="z-10 absolute bottom-0 rounded-2xl"
                />
            </div>

            <h1 className = "font-bold lg:text-2xl md: text-xl text-base line-clamp-1">
               {title} 
            </h1>

            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
            </p>

{/*
            <div className="flex items-center justidy-between mt-7 mb-3">
                <div className="flex items-center">
                    {iconLists.map((icon,index)=>(
                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 h-10 sm:w-8 h-8 flex justify-center items-center" 
                        style={{transform: `translateX(-${5*index*2}px)`}}>
                            <img src={icon} alt="icon" className="p-2"/>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Check it out!</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                </div>
            </div>
*/}
          </PinContainer>
        </div> 
    ))}
    </div>
    </div>
  )
}

export default RecentProjects
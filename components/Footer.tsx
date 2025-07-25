import React from 'react'
import LitUpBordersButton from './ui/LitUpBordersButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 z-10 relative" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                I&apos;m always looking for the next challenge.
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me!</p>
            <a href="mailto:vincentconti399@gmail.com">
                <LitUpBordersButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative">
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2025 Vincent Conti
            </p>

            <div className ="flex items-center md:gap-3 gap-6 relative">
        {socialMedia.map((profile)=>(
            <div key={profile.id} className= "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt={"Hi"} width={20} height={20}/>
            </div>

        ))}
        </div>
        </div>

        



    </footer>
  )
}

export default Footer
'use client';

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { cn } from '@/utils/cn'
import LitUpBordersButton from './ui/LitUpBordersButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (

<div className=" flex h-screen w-full items-center justify-center overflow-hidden ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] 
      dark:bg-black"/>

      <div className="flex flex-col justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center max-w-80"> Dynamic Web Magic with Next.js</h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg: text-6xl"
            words="Transforming Concepts into Seamless Experiences"
            />
            <p className="text-center md:tracking-wider pt-4 mb-4 text-sm md:text-lg lg:text-2xl"> Hi, I&apos;m Vincent, a computer science student at Montgomery College!
            </p>

            <a href="#about">
              <LitUpBordersButton
              title= "Show my work"
              icon={<FaLocationArrow/>}
              position ='right'
              />
            </a>

            </div>
        </div>

    </div>

  )
}

export default Hero
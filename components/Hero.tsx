import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { cn } from '@/utils/cn'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

    <div className="flex flex-col justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flec-col items-center justify-center">
    #TODO figure out how to center this godamn header correctly
            <h2 className = "uppercase tracking-widest test-xs text-center max-w-80">Welcome</h2>
            
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg: text-6xl"
            words="Vincent Conti's Portfolio"
            />
            </div>
        </div>
    </div>
  )
}

export default Hero
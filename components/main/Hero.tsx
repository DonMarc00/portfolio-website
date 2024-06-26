import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-420px] md:top-[-340px] xl:top-[-280px] left-0 z-[-1] w-full h-full'>
        <source src='/blackhole.webm' type='video/webm' />
        </video>
    <HeroContent/>
    </div>
  )
}

export default Hero
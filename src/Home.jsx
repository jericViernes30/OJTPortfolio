import React from 'react'
import { Header } from './Header'
import hero from './assets/hero.png'

export const Home = () => {
  return (
    <div id='home' className='relative'>
    <Header/>
      <div className='min-h-screen flex items-center w-3/4 mx-auto'>
        <div className='w-1/2 block mx-auto z-10'>
            <p className='text-3xl text-center p-1'>Hello, I am <span className='text-[#00dfc0] font-semibold'>Jeric James Viernes</span>.</p>
            <p className='text-center text-xl'>An aspiring full-stack Web Developer <br /> based in Cabuyao City Laguna.</p>
        </div>
        <div className='w-1/2'>
            <img className='mx-auto' src={hero} alt="Home Image" />
        </div>
    </div>

    </div>
    
  )
}

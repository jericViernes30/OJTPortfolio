import React from 'react'
import profile from './assets/profilePicture.png'
import react from './assets/tech/react.png'
import html from './assets/tech/html.png'
import css from './assets/tech/css.png'
import node from './assets/tech/node.svg'
import laravel from './assets/tech/laravel.png'
import express from './assets/tech/express.png'
import javascript from './assets/tech/javascript.png'
import php from './assets/tech/php.png'
import tailwind from './assets/tech/tailwind.png'
import bootstrap from './assets/tech/bootstrap.png'

export const AboutPage = () => {

    var loginCode = 84258038

    const encodedLoginCode = encodeURIComponent(loginCode);

  return (
    <div id='about' className='w-3/4 h-auto mx-auto mb-32'>
        <p className='text-center text-3xl font-medium mb-10'>About</p>
        <div className='w-full bg-[#f6f1eb] border border-black mx-auto flex justify-between rounded-3xl relative overflow-hidden' style={{ boxShadow: '5px 5px #1b1917' }}>
            <div className='w-1/2 flex flex-col justify-center pl-10 z-10'>
                <p className='font-bold text-xl mb-2'>I'm Jeric James C. Viernes</p>
                <p className='text-justify text-sm mb-5'>Currently in my third year studying BSIT at St. Vincent College of Cabuyao. At 21 years old, my passion lies in programming, learning new technologies, and creating captivating websites. I've ventured into entrepreneurship with my own development business, SmartCode Studios, where I pour my dedication and expertise into every project. As I continue to immerse myself in the world of technology, I'm excited to push boundaries and leave my mark in the field of web development.</p>
                <div className='w-full flex justify-between'>
                    <div className='w-1/3'>
                        <p className='text-center'>Front-end</p>
                        <div className='flex gap-2 justify-center'>
                            <img className='w-[32px] h-auto' src={html} alt="" />
                            <img className='w-[32px] h-auto' src={css} alt="" />
                            <img className='w-[32px] h-auto' src={javascript} alt="" />
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <p className='text-center'>Back-end</p>
                        <div className='flex gap-2 justify-center'>
                            <img className='w-[32px] h-auto' src={php} alt="" />
                            <img className='w-[32px] h-auto' src={javascript} alt="" />
                            <img className='w-[32px] h-auto' src={node} alt="" />
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <p className='text-center'>Frameworks</p>
                        <div className='flex gap-2 justify-center'>
                            <img className='w-[32px] h-auto' src={react} alt="" />
                            <img className='w-[32px] h-auto' src={tailwind} alt="" />
                            <img className='w-[32px] h-auto' src={bootstrap} alt="" />
                            <img className='w-[32px] h-auto' src={laravel} alt="" />
                            <img className='w-[32px] h-auto' src={express} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-end overflow-hidden'>
                <img className='w-[400px] h-auto rounded-br-3xl z-10' src={profile} alt="" />
                <div className='w-[400px] h-[200px] rounded-[50%] bg-[#d4a7ea] blur-3xl absolute left-0 top-0 z-0'></div>
                <div className='w-[600px] h-[200px] rounded-[50%] bg-[#5deecf] blur-3xl absolute left-[18rem] top-0 z-0'></div>
                <div className='w-[400px] h-[300px] rounded-[50%] bg-[#ffa9d2] blur-3xl absolute left-64 top-32 z-0'></div>
                <div className='w-[500px] h-[300px] rounded-[50%] bg-[#d48cfc] blur-3xl absolute left-0 top-44 z-0'></div>
                <div className='w-[400px] h-[300px] rounded-[50%] bg-[#4fe5c2] blur-3xl absolute left-48 top-44 z-0'></div>
                <div className='w-[400px] h-[300px] rounded-[50%] bg-[#fed2a1] blur-3xl absolute left-[28rem] top-44 z-0'></div>
                <div className='w-[300px] h-[300px] rounded-[50%] bg-[#9b8afe] blur-3xl absolute left-[40rem] top-0 z-0'></div>
                <div className='w-[300px] h-[300px] rounded-[50%] bg-[#d4a7ea] blur-3xl absolute left-[50rem] top-0 z-0'></div>
                <div className='w-[300px] h-[300px] rounded-[50%] bg-[#4fe5c2] blur-3xl absolute left-[60rem] top-10 z-0'></div>
            </div>
        </div>
    </div>
  )
}

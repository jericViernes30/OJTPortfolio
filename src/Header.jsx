import React from 'react'
import { useEffect } from 'react';

export const Header = () => {
    useEffect(() => {
        const handleSmoothScroll = (event) => {
          event.preventDefault();
          const targetId = event.target.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        };
    
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener('click', handleSmoothScroll);
        });
    
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', handleSmoothScroll);
          });
        };
      }, []);

  return (
    <div className=''>
        <div className='absolute w-3/4 flex justify-between mx-auto py-5 z-10 top-0 left-1/2 transform -translate-x-1/2'>
            <div>
                <p className='font-semibold'>Jeric <span>James</span></p>
            </div>
            <div className='flex gap-10'>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contactMe">Contact</a>
            </div>
            <div>
                <a href='#contactMe' id='lets-talk' className='px-4 py-1 bg-[#00dfc0]' style={{ boxShadow: '5px 5px rgba(0, 0, 0, 0.5)' }}>Let's talk!</a>
            </div>
        </div>
    </div>
  )
}

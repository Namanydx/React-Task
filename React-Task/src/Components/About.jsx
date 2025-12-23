import React from 'react'

const About = () => {
  return (
    <div className='h-120 p-3 bg-black'>
        <div className='flex items-center gap-2'>
            <div className='h-115 w-1/2 bg-[#1e1e1e] rounded-lg'>
                <h1 className='text-white font-bold mt-12 ml-12'>ABOUT</h1>
                <h1 className='text-white text-5xl mt-12 ml-12'>WHERE FASHION MEETS FREEDOM</h1>
                <div className='flex items-center justify-center gap-6'>
                    <p className='text-white pl-12 pt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, libero! Dolor, nisi nihil. Aperiam, error, non animi facilis velit soluta sequi ipsam pariatur voluptates aspernatur labore odio adipisci fugiat quasi!</p>
                    <p className='text-white pt-12 pr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sequi laborum ipsa est maiores ea illum odit eaque quis enim consequatur placeat alias similique! Molestias, magni? Dolorem porro incidunt aliquid.</p>
                </div>
            </div>
            <div className='h-115 w-1/2 bg-cover bg-center bg-[url(./src/assets/Images/coat.png)] rounded-lg'></div>
        </div>
    </div>
  )
}

export default About
import React from 'react'

const Page = () => {
  return (
    <div className='p-3 bg-black h-screen'>
      <div className='h-full relative bg-cover bg-top bg-[url(./src/assets/Images/hero.jpg)]'>
          <div className='absolute top-[40%] left-[8%] text-white text-8xl'>
              DESIGN
          </div>
          <div className='absolute top-[60%] left-[16%]  text-white text-8xl'>
              & FREEDOM
          </div>
          <div className='absolute top-[80%] left-[20%]  text-white text-lg'>
              Explore Independently Style by Embracing<br></br>with Our Exclusive Designer Apparel
          </div>
          <div className='absolute right-[20%] top-[83%] rounded-3xl bg-gray-500 h-7'>
            <i className='h-6 w-6 p-3' class="ri-arrow-down-long-line"></i>
          </div>
          <div className='text-white absolute right-[12.5%] top-[83%]'>LEARN MORE</div>
      </div>
    </div>
  )
}

export default Page
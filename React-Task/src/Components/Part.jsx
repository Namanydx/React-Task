import React from 'react'

const Part = () => {
  return (
    <div className='h-60 pl-2 pr-3 bg-black'>
       <div className='flex items-center gap-2'>
        <div className='bg-[#1e1e1e] h-55 w-1/4 rounded-lg'>
          <h1 className='text-white ml-8 mt-8'>INDEPENDENCY</h1>
          <p className='text-white ml-8 mt-4'>Explore the creativity of Independent <br /> designers from around the globe.</p>
          <div className='flex items-center gap-2 mt-6 ml-8'>
            <button className='rounded-3xl bg-white h-8 w-8'><i class="ri-arrow-right-up-long-line"></i></button>
            <h2 className='text-white'>LEARN MORE</h2>
          </div>
        </div>
        <div className='bg-[#1e1e1e] h-55 w-1/4 rounded-lg'>
          <h1 className='text-white ml-8 mt-8'>UNIQUITY</h1>
          <p className='text-white ml-8 mt-4'>Discover the charm of unique pieces <br /> that stand out efforlessly.</p>
          <div className='flex items-center gap-2 mt-6 ml-8'>
            <button className='rounded-3xl bg-white h-8 w-8'><i class="ri-arrow-right-up-long-line"></i></button>
            <h2 className='text-white'>LEARN MORE</h2>
          </div>
        </div>
        <div className='bg-[#1e1e1e] h-55 w-1/4 rounded-lg'>
          <h1 className='text-white ml-8 mt-8'>QUALITY</h1>
          <p className='text-white ml-8 mt-4'>Experience unparalled<br />craftmenship and attention to details.</p>
          <div className='flex items-center gap-2 mt-6 ml-8'>
            <button className='rounded-3xl bg-white h-8 w-8'><i class="ri-arrow-right-up-long-line"></i></button>
            <h2 className='text-white'>LEARN MORE</h2>
          </div>
        </div>
        <div className='bg-[#1e1e1e] h-55 w-1/4 rounded-lg'>
          <h1 className='text-white ml-8 mt-8'>SUSTAINABILITY</h1>
          <p className='text-white ml-8 mt-4'>Embrace eco-consious fashion choices <br /> without compromising on choice.</p>
          <div className='flex items-center gap-2 mt-6 ml-8'>
            <button className='rounded-3xl bg-white h-8 w-8'><i class="ri-arrow-right-up-long-line"></i></button>
            <h2 className='text-white'>LEARN MORE</h2>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Part
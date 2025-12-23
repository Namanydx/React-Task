import React from 'react'

const Advantages = () => {
  return (
    <div className='h-130  bg-black p-3'>
        <div className='h-20 bg-black ml-12 mt-4'>
            <h1 className='text-white text-5xl pt-6 pb-3'>OUR ADVANTAGES</h1>
        </div>
        <div className='flex items-center justify-center gap-4'>
                <div className='h-90 w-1/2 bg-cover bg-center bg-[url(./src/assets/Images/shadowgirl.png)] mt-6 rounded-lg'></div>
                <div className='w-1/2 h-90 flex flex-col gap-2 mt-6'>
                    <div className='h-45 w-full bg-[#1e1e1e] rounded-xl pt-4 pb-8'>
                        <h1 className='text-white text-3xl ml-8 mt-2'>INDEPENDENT DESIGNERS</h1>
                        <div className='w-140 ml-8 mt-2 flex items-center gap-10'>
                            <p className='text-sm text-white mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat magnam, nihil explicabo ratione fuga itaque maiores! Nihil laboriosam omnis aliquid voluptatum id? Neque nemo rem voluptate quisquam dignissimos, doloribus natus?</p>
                          <div className='mt-8 w-100 flex gap-2'>
                            <button className='h-6 w-6 bg-white rounded-3xl'><i class="ri-arrow-right-up-long-line"></i></button>
                            <h2 className='text-sm text-white'>EXPLORE</h2>
                          </div>
                        </div>
                    </div>
                    <div className='h-45 w-full bg-[#1e1e1e] rounded-xl pb-8 pt-4'>
                        <h1 className='text-white text-3xl ml-8 mt-2'>EXCLUSIVE & UNIQUITY</h1>
                        <div className='w-140 ml-8 mt-2 flex items-center gap-10'>
                            <p className='text-sm text-white mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat magnam, nihil explicabo ratione fuga itaque maiores! Nihil laboriosam omnis aliquid voluptatum id? Neque nemo rem voluptate quisquam dignissimos, doloribus natus?</p>
                          <div className='mt-8 w-100 flex gap-2'>
                            <button className='h-6 w-6 bg-white rounded-3xl'><i class="ri-arrow-right-up-long-line"></i></button>
                            <h2 className='text-sm text-white'>EXPLORE</h2>
                          </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Advantages
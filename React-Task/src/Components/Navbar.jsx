import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#000000]  h-10 rounded-tr-xl rounded-tl-xl'>
       <div className='text-white ml-3'>DVSY</div>
       <div className='text-white flex items-center justify-evenly gap-4'>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>DESIGNERS</div>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>COLLAB</div>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>EVENTS</div>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>BLOGS</div>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>CARD</div>
        <div className='bg-[#1f201a] rounded-lg pl-4 pr-4 pt-1 pb-1 mt-2'>EVENTS</div>
        <div className='text-black bg-red-600 rounded-lg p-2 mr-3 mt-2'>GET IN TOUCH</div>
       </div>
    </div>
   
  )
}

export default Navbar
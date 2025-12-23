import React from 'react'

const Board = () => {
  return (
    <div className='h-30 p-3 bg-black'>
        <div className='flex items-center justify-between'>
            <div className='ml-12'>
                <h4 className='text-white'>DESIGNERS</h4>
                <h1 className='text-white text-3xl'>150+</h1>
            </div>
            <div>
                <h4 className='text-white'>CLIENTS</h4>
                <h1 className='text-white text-3xl'>500+</h1>
            </div>
            <div>
                <h4 className='text-white'>MASTERPIECES</h4>
                <h1 className='text-white text-3xl'>20K+</h1>
            </div>
            <div className='mr-12'>
                <h4 className='text-white'>EVENTS</h4>
                <h1 className='text-white text-3xl'>50+</h1>
            </div>
        </div>
    </div>
  )
}

export default Board
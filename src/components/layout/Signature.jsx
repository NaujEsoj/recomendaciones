import React from 'react'
import Circle from '../assets/12.png'

function Signature() {
  return (
    <div>
      <div className='bg-gradient-to-b from-transparent to-black w-full left-0 fixed bottom-0 flex justify-center items-end'>
        <img className='w-4 text-white h-4 left-16 relative bottom-4' src={Circle} alt="circle" />
        <p className='py-4 text-xs'><span className='text-sm py-6'>By</span>  El Juan Jo</p>
      </div>
    </div>
  )
}

export default Signature

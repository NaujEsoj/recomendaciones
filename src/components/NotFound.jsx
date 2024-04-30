import React from 'react'
import Navbar from './layout/Navbar'
import Error404 from './assets/404.png'
import Signature from './layout/Signature'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className='h-screen bg-white flex flex-col'>
        <p className='text-9xl text-black md:p-8 p-6 '>404...</p>
        <p className='text-base italic text-black absolute right-6 top-72'>LA NADA...</p>
        <p className='text-base italic text-black absolute right-16 top-80'>EL VACIO...</p>
        <img className='absolute bottom-2 left-8' src={Error404} width="50" alt="" />
      </div>
      <Signature />
    </>
  )
}

export default NotFound

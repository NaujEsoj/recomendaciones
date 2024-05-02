import {React, useState, } from 'react'
import { Link } from 'react-router-dom';

import HC from './assets/hand-crank.png'
import Down from './assets/down.png'

import Signature from './layout/Signature'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {

  const [progress, setProgress] = useState(0)

  const handleProgress = () => {
    if (progress < 100) {
      setProgress(prevState => prevState + 5)
    }
  }

  return (
    <div className="p-0 m-0 shadow-2xl md:w-full m-auto ">
      <div className="h-screen bg-gradient-to-r from-pink-500 to-blue-600 flex flex-col justify-between items-center">
        <div className='text-center'>
          <h1 className="text-5xl mt-8 font-bold ">-Hello there</h1>
          <p className='text-xs'>(-General Kenobi!)</p>
        </div>
        <p className="py-6 text-3xl font-bold">Bienvenido a: </p>
        <p className='text-xl italic text-center'><span className='text-3xl'>"</span>Postura unica teorica ordenada Enfatizada liturgicamente que lo libera enormemente A.<span className='text-3xl'>"</span></p>
        <div className='py-6'>
          <p className=' text-base italic'>Por sus siglas: (P.U.T.O.E.L.Q.U.E.L.O.L.E.A.)</p>
        </div>
        <div className='flex w-full justify-center my-8 animate-bounce'>
          <img src={Down} width={70} alt="Down Arrow, Continue" />
        </div>
      </div>
      <Signature />
      <div className='bg-pink-500 w-full text-center h-screen flex flex-col py-16 justify-between items-center'>
        <p className='mt-16  font-bold'>Para iniciar, por favor dele manivela al sitio:</p>
          <div className='w-32'>
            {progress === 100 ?
            <Link to="/login"><button className='w-32 h-32 border-8 rounded-full border-sky-600 text-3xl animate-pulse'>Iniciar</button></Link> :
            <CircularProgressbar value={progress} text={`${progress}%`} />}
          </div>
          <div className='flex justify-center m-8'>
            <button onClick={handleProgress}><img alt='Handle' width="60" src={HC} /></button>
          </div>
      </div>
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import SC from '../assets/spml.gif'
import maxwell from '../assets/maxwell.mp3'

function Navbar() {

  const [audio, setAudio] = useState(false)

  const [mp3] = React.useState(new Audio(maxwell));


  const start = () => {
    mp3.play()
  }

  const stop = () => {
    mp3.pause()
  }

  return (
    <div>
      <div className="navbar bg-base-100 bg-gradient-to-r from-red-400 to-pink-500 shadow-2xl rounded-3xl my-3 w-11/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-base-100 bg-gradient-to-r from-red-400 to-pink-500">
              <Link to={"/montly-list"}><li><button className='btn m-1 btn-secondary text-center block'>Musica</button></li></Link>
              <Link to={"/movies"}><li><button className='btn m-1 btn-secondary text-center block'>Peliculas</button></li></Link>
              <Link to={"/games"}><li><button className='btn m-1 btn-secondary text-center block'>Juegos</button></li></Link>
              <Link to={"/books"}><li><button className='btn m-1 btn-secondary text-center block'>Libros</button></li></Link>
            </ul>
          </div>
            <div className='flex'>
              <Link to="/media-selector"><button className="btn btn-ghost text-xl">Home</button></Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <Link to={"/montly-list"}><li><button className='btn m-2 btn-secondary block'>Musica</button></li></Link>
            <Link to={"/movies"}><li><button className='btn m-2 btn-secondary block'>Peliculas</button></li></Link>
            <Link to={"/games"}><li><button className='btn m-2 btn-secondary block'>Juegos</button></li></Link>
            <Link to={"/books"}><li><button className='btn m-2 btn-secondary block'>Libros</button></li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          {audio ? <div className="chat chat-end relative right-2 h-10">
            <div className="chat-bubble flex pr-1">
              <p className='mt-1'>Nyan?</p>
              <button className='btn btn-xs px-4 m-2 bg-green-700' onClick={start}>hai!</button>
              <button className='btn btn-xs px-5 m-2 bg-red-500' onClick={stop}>iie</button>
              <button className='btn btn-xs relative bottom-4 left-2' onClick={()=>{setAudio(false)}}>X</button>
            </div>
          </div>
          : ''}
          <img className='cursor-pointer' src={SC} width={90} alt="Maxwell" onClick={()=>{setAudio(prevState => !prevState)}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

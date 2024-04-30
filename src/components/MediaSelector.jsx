import { Link } from 'react-router-dom';

import Navbar from './layout/Navbar'
import Signature from './layout/Signature'

import Music from './assets/Music.png'
import Movie from './assets/movie.png'
import Games from './assets/games.png'
import Books from './assets/book.png'

function MediaSelector() {
  return (
    < div className='bg-teal-900'>
      <Navbar />

      <div className='text-center m-24'>
        <p class="text-xl font-bold m-4">Oh!</p>
        <p class="text-lg m-8 italic">No había visto que estabas ahí... pero bueno, pasa, siéntate.</p>
        <p class="text-lg mb-8 italic">A ver te explico...</p>
        <p class="text-lg italic mb-8">Este sitio podrás ver algunas recomendaciones que tengo sobre cosas que no tienen importancia.</p>
        <p class="text-xl font-bold mb-16">¿Qué quisieras ver hoy?</p>
      </div>

      <div className='flex m-auto w-11/12 justify-around flex-wrap '>

        <div className="card lg:card-side bg-green-400 shadow-xl m-4 w-full md:w-1/3 m-4 md:m-16">
          <figure><img src={Music} alt="Album"/></figure>
          <div className="card-body text-black">
            <h2 className="card-title">Musiquita?</h2>
            <p>Siga por aqui ome!</p>
            <div className="card-actions justify-end">
            <Link to="/montly-list">
              <button className="btn btn-error">Dele pues!</button>
            </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-stone-900 shadow-xl m-4 w-full md:w-1/3 m-4 md:m-16">
          <figure><img src={Movie} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Una peli?</h2>
            <p></p>
            <div className="card-actions justify-end">
              <Link to="/movies">
                <button className="btn btn-error">O miedo?</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-fuchsia-500 shadow-xl m-4 w-full md:w-1/3 m-4 md:m-16">
          <figure><img src={Games} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Una partidita?</h2>
            <p>Vamo' a hacelo!</p>
            <div className="card-actions justify-end">
              <Link to="/games">
                <button className="btn btn-primary">Vicio Aqui</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-amber-700 shadow-xl m-4 w-full md:w-1/3 m-4 md:m-16">
          <figure><img src={Books} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Un break?</h2>
            <p>Un cafesito y un buen libro</p>
            <div className="card-actions justify-end">
              <Link to="/books">
                <button className="btn btn-primary">Gueno</button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <Signature />
    </div>
  )
}

export default MediaSelector

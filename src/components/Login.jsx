import { Link } from 'react-router-dom';

import Familia from './assets/familia.jpg'
import Amigos from './assets/amigos.png'
import Conocidos from './assets/conocidos.png'
import Otros from './assets/otros.jpg'

import Signature from './layout/Signature'

function Login() {

  return (
    <main className='h-full'>
      <div className='m-auto my-32 md:mt-8'>
        <h1 className='text-5xl bold text-center'>Identificate:</h1>
      </div>
      <div class="grid grid-rows-2 md:grid-rows-1 md:gap-16 grid-flow-col gap-8 md:pt-8 m-auto ">
        <Link to="/knowledge-test" >
          <div className="avatar m-auto flex flex-col items-center transform transition-transform hover:scale-110">
            <div className="md:w-52 w-24 mask mask-hexagon ">
              <img src={Familia} alt='Familia' />
            </div>
            <p className='m-auto'>Familia</p>
          </div>
        </Link>
        <Link to="/number-test">
          <div className="avatar m-auto flex flex-col items-center transform transition-transform hover:scale-110">
            <div className="md:w-52 w-24 mask mask-hexagon ">
              <img src={Amigos}  alt='Amigos'/>
            </div>
            <p className='m-auto'>Amigos</p>
          </div>
        </Link>
        <Link to="/number-test">
          <div className="avatar m-auto flex flex-col items-center transform transition-transform hover:scale-110">
            <div className="md:w-52 w-24 mask mask-hexagon ">
              <img src={Conocidos} alt='Conocidos' />
            </div>
            <p className='m-auto'>Conocidos</p>
          </div>
        </Link>
        <Link to="/otros">
          <div className="avatar m-auto flex flex-col items-center transform transition-transform hover:scale-110">
            <div className="md:w-52 w-24 mask mask-hexagon ">
              <img src={Otros} alt='otros' />
            </div>
            <p className='m-auto'>Otros</p>
          </div>
        </Link>
      </div>
      <Signature />

    </main>
  )
}

export default Login
import Navbar from './layout/Navbar'
import Signature from './layout/Signature'

import NightShift from './assets/books/61B9RtPYyL.jpg'
import Housemade from './assets/books/60556912.jpg'
import letROneIn from './assets/books/943402.jpg'
import HiddenPictures from './assets/books/10001000QL80.jpg'
import BajoEstrella from './assets/books/The_Fault_in_Our_Stars.jpg'

import Down from './assets/down.png'


function Books() {
  return (
    <div>
      <Navbar />

      <div className='w-11/12 md:w-3/4 m-auto '>
      <h1 className='text-2xl bold text-center my-12 bg-zinc-400 rounded-lg p-4'>Leyendo / Escuchando:</h1>
        <div className="card lg:card-side bg-slate-800 shadow-xl">
          <figure><img className='md:w-2/4' src={BajoEstrella} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Bajo La Misma Estrella</h2>
            <p className='italic'>Jhon Green</p>
            <p className='m-4'>comentarios pendientes</p>
          </div>
        </div>
      <h1 className='text-2xl bold text-center my-16 bg-zinc-400 rounded-lg p-4'>
        Leidos / Escuchados:
      </h1>
        <div className="card lg:card-side bg-slate-800 shadow-xl">
          <figure><img className='md:w-2/4' src={NightShift} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">En el umbral de la noche</h2>
            <p className='italic'>Stephen King</p>
            <div className="collapse bg-slate-600 md:bg-slate-800 md:collapse-open">
              <input type="checkbox" className="peer md:hidden" />
              <div className="collapse-title flex md:hidden md:invisible">
                <p>Ver comentarios</p>
                <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
              </div>
              <div className="collapse-content ">
              <p className='m-4'>King es el mejor, pero al ser cuentos cortos, uno empieza a meterse en la trama, empieza a tener expectativas, ansiedad por saber más y ZAZ, se terminó...</p>
              <p className='m-4'>El suave y directo contacto con lo que él llama el miedo profundo, el morbo por lo oscuro, the call of the void, el fuego fatuo. Habría disfrutado mucho estas historias más desarrolladas, más largas. Mi favorita es la de los soldaditos, que maestro King... algo tan simple y él lo lleva a intrínsecas situaciones. Un deleite este libro.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-800 shadow-xl my-8">
          <figure><img className='md:w-2/4' src={Housemade} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">La Asistenta</h2>
            <p className='italic'>Freida McFadden</p>
            <div className="collapse bg-slate-600 md:bg-slate-800 md:collapse-open">
              <input type="checkbox" className="peer md:hidden" />
              <div className="collapse-title flex md:hidden md:invisible">
                <p>Ver comentarios</p>
                <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
              </div>
              <div className="collapse-content ">
              <p className='m-4'>La narración es impecable. El ambiente donde se desarrolla puede sonar un poco cliché, pero el plot twist es muy interesante. Enseña mucho sobre la idea de que "no todo lo que brilla es oro".</p>
              <p className='m-4'>Sin embargo, la resolución se me dio un poco rápida. Como que se arreglaron los problemas fácilmente y ahora todo es color de rosa... Hmmm... Creo que se podía extender más el nudo, así como la duración de la lectura.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-800 shadow-xl my-8">
          <figure><img className='md:w-3/4' src={letROneIn} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Dejame Entrar</h2>
            <p className='italic'>Jhon Ajvide</p>
            <div className="collapse bg-slate-600 md:bg-slate-800 md:collapse-open">
              <input type="checkbox" className="peer md:hidden" />
              <div className="collapse-title flex md:hidden md:invisible">
                <p>Ver comentarios</p>
                <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
              </div>
              <div className="collapse-content ">
                <p className='m-4'>Si te viste la película, no te pierdes de mucho. La historia principal atrapa: te cuenta sobre esas frías calles llenas de nieve que en su tersa blancura esconden oscuros secretos. El escritor a veces enriquece mucho el texto; se siente que rellena con muchas cosas que, si bien ayudan a la narración, pueden sentirse ajenas a la trama principal.</p>
                <p className='m-4'>De todas formas, es un libro muy interesante. Te sumerge en la oscura vida del personaje, donde su salvación es conocer un ser más oscuro que él mismo, o más oscuro que cualquiera...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-800 shadow-xl my-8">
          <figure><img className='md:w-3/4' src={HiddenPictures} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Figuras Ocultas</h2>
            <p className='italic'>Jason Rekulak</p>
            <div className="collapse bg-slate-600 md:bg-slate-800 md:collapse-open">
              <input type="checkbox" className="peer md:hidden" />
              <div className="collapse-title flex md:hidden md:invisible">
                <p>Ver comentarios</p>
                <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
              </div>
              <div className="collapse-content ">
                <p className='m-4'>El mismísimo King dijo sobre el libro: "I love it". Creo que eso es más que suficiente para querer leerlo. Ahora, si no lo es, entonces añadele que tiene una narración que atrapa. Quieres saber qué pasó, es un libro que quieres leer ya, saber ya qué está pasando.</p>
                <p className='m-4'>Sobre el desarrollo, empieza como la mayoría de novelas: chica pobre, casa de ricos, muy María la del Barrio. Pero al añadir misterio y algún otro suceso paranormal, la narración te transmite el miedo, la necesidad de descubrir la verdad. Una verdadera delicia este libro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Signature />
    </div>
  )
}

export default Books

import Navbar from './layout/Navbar'
import Signature from './layout/Signature'

import Down from './assets/down.png'

import MatarAJesus from './assets/movies/matar_a_jesus_1.jpg'
import MatarAJesusMin from './assets/movies/matar_a_jesus_1min.jpg'
import BuenPatron from './assets/movies/el-buen-patron.jpg'
import BuenPatronMin from './assets/movies/el-buen-patronmin.jpg'
import Lobster from './assets/movies/lobster.jpeg'
import LobsterMin from './assets/movies/Langosta.jpg'
import PoorThings from './assets/movies/multimedia.normal.webp'
import PoorThingsMin from './assets/movies/images.jpg'
import theGardenMin from './assets/movies/the-garden.png'
import theGarden from './assets/movies/the-gardenb.jpg'


function Movies() {

  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />

      <div className='w-11/12 md:w-3/4 m-auto '>
        <h1 className='text-3xl bold text-center my-12 bg-zinc-400 rounded-lg p-4'>Hoy en "Que he visto recientemente:"</h1>
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl image-full p-4">
          <figure><img src={theGarden} alt="The Garden" /></figure>
          <div className="card-body flex-col">
            <h2 className="card-title text-2xl max-h-fit">The Garden</h2>
            <p></p>
            <div className='flex flex-col md:flex-row'>
              <img className='md:w-1/4 h-fit mt-4' src={theGardenMin} alt="The Garden Film" />
              <div className="collapse bg-slate-600 md:bg-transparent md:collapse-open rounded-none">
                <input type="checkbox" className="peer md:hidden" />
                <div className="collapse-title flex md:hidden md:invisible">
                  <p>Ver comentarios</p>
                  <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
                </div>
                <div className="collapse-content md:text-xl">
                  <p>
                    Que putas pasa en ese jardin?
                  </p>
                  <p>
                  Es un short, inicia lento, pero el último minuto es el que deja entender lo que puede pasar en el jardín. Nada tiene sentido, aun cuando te lo explican sigues sin entender muchas cosas, no es una crítica, ya la vez lo es, hay personajes que no entiendes su rol, todo es raro, pero al final cuando lo entiendes, o cuando te lo explican (como me pasó a mi) uno dice, aaaahhhhhhh... ta buena esa vaina. esta en YouTube, míralo <a href="https://www.youtube.com/watch?v=YSwlIVha3yU" target='blank'>AQUI</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl image-full p-4">
          <figure><img src={PoorThings} alt="Poor Things" /></figure>
          <div className="card-body flex-col">
            <h2 className="card-title text-2xl max-h-fit">"Poor Things"</h2>
            <p></p>
            <div className='flex flex-col md:flex-row'>
              <img className='md:w-1/4 h-fit mt-4' src={PoorThingsMin} alt="Poor Things Film" />
              <div className="collapse bg-slate-600 md:bg-transparent md:collapse-open rounded-none">
                <input type="checkbox" className="peer md:hidden" />
                <div className="collapse-title flex md:hidden md:invisible">
                  <p>Ver comentarios</p>
                  <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
                </div>
                <div className="collapse-content md:text-xl">
                  <p>
                    Lei un comentario que decia: "Es la mente de una niña en el cuerpo de una mujer, era imposible que no les gustara a los de Hollywood".
                  </p>
                  <p>
                     Don Yorgos de nuevo, pero ahora con una historia muy interesante, excelente direccion, perfecta direccion de fotografia, increible, inpecable esta pelicula, una buena trama explicada de manera sutil, abstracta, externa y a la vez intima.
                     Sin embargo, se siente que la protegonista tiene dificultades para crear conexiones emocionales con quienes se preocupan por ella. Siempre esta persiguiendo algo que nunca encuentra, perdiendo todo en el camino, incluso ella misma. Al final parece haber encontrado satisfaccion, pero la encontro en el mismo camino inicial propuesto por sus cercanos (padre). Entonces fue una experiencia innecesaria con altos y bajos pero bueno, supongo que asi es la vida...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl image-full p-4">
          <figure><img src={Lobster} alt="La Langosta" /></figure>
          <div className="card-body flex-col">
            <h2 className="card-title text-2xl max-h-fit">"La Langosta"</h2>
            <p>Matar al perro era innecesario.</p>
            <div className='flex flex-col md:flex-row'>
              <img className='md:w-1/4 h-fit mt-4' src={LobsterMin} alt="La Langosta Film" />
              <div className="collapse bg-slate-600 md:bg-transparent md:collapse-open rounded-none">
                <input type="checkbox" className="peer md:hidden" />
                <div className="collapse-title flex md:hidden md:invisible">
                  <p>Ver comentarios</p>
                  <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
                </div>
                <div className="collapse-content md:text-xl">
                  <p>
                    ¿Es tan importante tener pareja? ¿Tanto que si no la tienes eres considerado un estorbo en la sociedad? ¿Y qué me dices de los hijos? ¿Es con lo único que podemos aportar a la sociedad? Ahora, la mejor pregunta es: ¿Nos importa la sociedad?
                  </p>
                  <p>
                     Don Yorgos nos trae una crítica a la sociedad, a la imperante necesidad de pertenencia, a las reglas absurdas impuestas sin motivos aparentes, al domínio de unos inseguros sobre los de espíritu más libre. El protagonista, al igual que una langosta, muta su personalidad. Se adapta a las circunstancias con tal de acceder a ese "selecto grupo" de normales que resultan ser peores que los extraños. Al final, logra conocer el amor verdadero. Pero la sociedad no le permitirá vivir feliz. Surge la pregunta: ¿Hasta qué punto estás dispuesto a renunciar a ti mismo para adaptarte a tu entorno?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl image-full p-4">
          <figure><img src={BuenPatron} alt="El buen Patrón" /></figure>
          <div className="card-body flex-col">
            <h2 className="card-title text-2xl max-h-fit">"El buen Patrón"</h2>
            <p>Hay gente que nace para cagarla y salirse con las suyas.</p>
            <div className='flex flex-col md:flex-row'>
              <img className='md:w-1/4 h-fit mt-4' src={BuenPatronMin} alt="El buen Patrón Film" />
              <div className="collapse bg-slate-600 md:bg-transparent md:collapse-open rounded-none">
                <input type="checkbox" className="peer md:hidden" />
                <div className="collapse-title flex md:hidden md:invisible">
                  <p>Ver comentarios</p>
                  <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
                </div>
                <div className="collapse-content md:text-xl">
                  <p>
                    Entretenida, con suspenso, giros de trama, te hace decir: "Este man...", "Pero como se le ocurre?", "Ahora si se jodio..."
                  </p>
                  <p>
                    Como reflexion, es una tipica historia de una persona que tienen un cierto grado de inteligencia emocional, asi como capacidad de decision, pero esto no lo hace sabio, igual comete errores, engaña, abusa, ofende, y al final logra salirse con la suya, pero nunca sera igual, el nuevo premio esta "Un poco desalineado"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl image-full p-4">
          <figure><img src={MatarAJesus} alt="Matar a Jesús" /></figure>
          <div className="card-body flex-col">
            <h2 className="card-title text-2xl max-h-fit">"Matar a Jesús"</h2>
            <p>No, no ese Jesús, otro...</p>
            <div className='flex flex-col md:flex-row'>
              <img className='md:w-1/4 h-fit mt-4' src={MatarAJesusMin} alt="Matar a Jesús Film" />
              <div className="collapse bg-slate-600 md:bg-transparent md:collapse-open rounded-none">
                <input type="checkbox" className="peer md:hidden" />
                <div className="collapse-title flex md:hidden md:invisible">
                  <p>Ver comentarios</p>
                  <img className='w-3 h-3 mt-2' src={Down} alt="flecha mostrar mas" />
                </div>
                <div className="collapse-content md:text-xl">
                  <p>
                    No me extrañaría que la historia de esta película haya ocurrido o se base fielmente en una realidad. Le hace uno preguntarse: ¿es la maldad algo intrínseco en el ser humano? ¿No hay forma de huir de esa violencia? Al final creo que la vida de Jesús es caótica porque eligió el “camino fácil”.
                  </p>
                  <p>
                    Sus actos, temores y verdades están determinados por elegir el camino corto, el que parece requerir menos esfuerzo, pero la apuesta al final es la vida. Creo que es un atajo hacia la muerte, y no vale la pena. La película muestra el sinsentido del sicariato y sus verdugos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Signature />
      </div>
    </>
  );
}

export default Movies

import Navbar from './layout/Navbar'
import Signature from './layout/Signature'

import Down from './assets/down.png'

import Inscryption from './assets/games/6-1-829114-52.jpg'
import Venba from './assets/games/venba.jpg'
import UnderTale from './assets/games/undertale.png'
import Cocoon from './assets/games/cocoon.jpg'
import Diablo4 from './assets/games/diablo4.jpg'
import Valorant from './assets/games/valorant.webp'
import LethalCompany from './assets/games/Lethal-Company.webp'
import ContentWarning from './assets/games/content-warning.webp'
import MarioKart8 from './assets/games/mario-kart-8.jpg'
import HForbiddenWest from './assets/games/horizon-forbidden-west.jpg'
import BaldursGate3 from './assets/games/baldurs-gate-3.webp'
import HellBlade2 from './assets/games/Hellblade-2.jpg'
import Frostpunk2 from './assets/games/Frostpunk-2.jpg'

function Games() {

  window.scrollTo(0, 0);

  return (
    <>
      <div>
        <Navbar />
        <h1 className='text-2xl bold text-center my-12 rounded-lg p-4'>Jugando</h1>
        <img className='w-8 m-auto' src={Down} alt="Down Arrow" />
        <div className='container p-10 m-auto md:w11/12 flex flex-col items-center'>
          <div role="tablist" className="tabs tabs-boxed w-full">
            <input type="radio" name="my_tabs_1" role="tab" className="tab addCheck" aria-label="Single player"/>
              <div role="tabpanel" className="tab-content p-5 md:p-10">

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={Venba} alt="Venba"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Venba</h2>
                    <p>La existencia puede ser mal agradecida, así como la cocina...</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/venba/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={Inscryption} alt="Album"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Inscryption</h2>
                    <p>Un juego de terror, de cartas???</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/inscryption/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={UnderTale} alt="Undertale"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Undertale</h2>
                    <p>Ahora recatándolo como pacifista, no sabes que significa? Pues juégalo, es de lo mejor que hay</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/undertale/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={Cocoon} alt="Cocoon"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Cocoon</h2>
                    <p>De los mismos creadores de Limbo e Inside, con eso ya deberiamos saber que es excelente.</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/cocoon/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Multiplayer" />
            <div role="tabpanel" className="tab-content p-10">

              <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={Diablo4} alt="Diablo 4"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Diablo 4</h2>
                    <p>"Stay Awhile and Listen..."</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/diablo-iv/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={Valorant} alt="Valorant"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Valorant</h2>
                    <p>La viciación...</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/valorant/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={LethalCompany} alt="Lethal Company"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Lethal Company</h2>
                    <p>La colaboración y el trabajo en equipo están obsoletos.</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/lethal-company/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={ContentWarning} alt="Content Warning"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Content Warning</h2>
                    <p>Crear contenido es mas difícil de lo que parece.</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/content-warning/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                  <figure><img src={MarioKart8} alt="Mario Kart 8"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Mario Kart 8</h2>
                    <p>El Mario carritos, nada le gana.</p>
                    <div className="card-actions justify-end">
                      <a href="https://www.metacritic.com/game/mario-kart-8-deluxe/" target='blank'>
                        <button className="btn btn-primary">Ficha Metacritic</button>
                      </a>
                    </div>
                  </div>
                </div>

            </div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Interesado en" />
            <div role="tabpanel" className="tab-content p-10">

              <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                <figure><img src={HForbiddenWest} alt="Horizon Forbidden West"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Horizon Forbidden West</h2>
                  <p>Dicen que es mejor que el uno (Zero Dawn), entonces, creo que aguanta.</p>
                  <div className="card-actions justify-end">
                    <a href="https://www.metacritic.com/game/horizon-forbidden-west-complete-edition/" target='blank'>
                      <button className="btn btn-primary">Ficha Metacritic</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                <figure><img src={BaldursGate3} alt="Baldur's Gate 3"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Baldur's Gate 3</h2>
                  <p>El GOTY del 2023, debe ser una pasada.</p>
                  <div className="card-actions justify-end">
                    <a href="https://www.metacritic.com/game/baldurs-gate-3/" target='blank'>
                      <button className="btn btn-primary">Ficha Metacritic</button>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Hyped for" />
            <div role="tabpanel" className="tab-content p-10">

              <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                <figure><img src={HellBlade2} alt="HellBlade 2"/></figure>
                <div className="card-body">
                  <h2 className="card-title">HellBlade 2</h2>
                  <p>El 1 fue una joya total, te hace sentir de primera mano la esquizofrenia, los puzles visuales, la trama, el final, esperemos que el 2 sea igual de bueno.</p>
                  <div className="card-actions justify-end">
                    <a href="https://www.metacritic.com/game/senuas-saga-hellblade-ii/" target='blank'>
                      <button className="btn btn-primary">Ficha Metacritic</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card lg:card-side bg-gradient-to-t from-fuchsia-950 to-fuchsia-600 shadow-xl my-10 md:max-h-96 w-full">
                <figure><img src={Frostpunk2} alt="Frostpunk 2"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Frostpunk 2</h2>
                  <p>Invierto en tecnología para comida? o en medicina para cortarles las extremidades por el frio y la necrosis? Esas son las decisiones que haces en Frost punk 1, es un juegazo.</p>
                  <div className="card-actions justify-end">
                    <a href="https://www.metacritic.com/game/frostpunk-2/" target='blank'>
                      <button className="btn btn-primary">Ficha Metacritic</button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    <Signature />
    </>
  )
}

export default Games

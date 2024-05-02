import { useState} from 'react'
import Navbar from './layout/Navbar'
import Signature from './layout/Signature'

import Meme1 from './assets/meme1.jpg'

function MontlyList() {

  const [slideNum, setSlideNum] = useState(1)
  const lists = 14

  if (slideNum > lists) {
    setSlideNum(lists)
  } else if (slideNum < 1) {
    setSlideNum(1)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col self-center'>
        <h1 className='text-3xl py-6 font-bold w-full m-auto text-center '>Listas de descubrimientos mensuales</h1>
      </div>
        <div className='flex flex-col self-center md:w-1/2 m-auto p-4'>
          <img src={Meme1} alt="meme about listen to bad music" />
        </div>

      <div className='flex flex-col self-center bg-red-300'>
        <div className='flex flex-col self-center'>
          <h1 className='text-3xl py-8 font-bold m-auto text-center text-white'>Lista del mes:</h1>
        </div>

        <div className='py-12 flex flex-col self-center max-w-screen-sm m-auto w-11/12'>
          <div className="carousel rounded-3xl m-auto w-11/12">
            <div id="" className="carousel-item relative w-full ">
              <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/12572222723" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col self-center'>
        <h1 className='text-xl py-6 font-bold w-11/12 m-auto text-center'>Listas de meses anteriores:</h1>
      </div>

      <div className='py-12 flex flex-col self-center max-w-screen-sm m-auto'>
        <div className="carousel rounded-3xl w-11/12 m-auto">
          <div id="slide1" className="carousel-item relative w-full ">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11181706924" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11185948464" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11255303024" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11334656564" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11482761024" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11539957324" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11650790184" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11701239384" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide9" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11836954481" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide10" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/11940631901" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide11" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/12068275151" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide12" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/12320059331" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide13" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/12433849743" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
          <div id="slide14" className="carousel-item relative w-full">
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/12474781063" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
          </div>
        </div>
        <div className="join grid grid-cols-2 w-3/5 m-auto py-6">
            <a onClick={()=>setSlideNum(prevState => prevState - 1)} href={'#slide'+slideNum} className="join-item btn btn-outline">Previous List</a>
            <a onClick={()=>setSlideNum(prevState => prevState + 1)} href={'#slide'+slideNum} className="join-item btn btn-outline">Next List</a>
          </div>
      </div>
      <Signature />
    </>
  )
}

export default MontlyList

import React from 'react'

import Loco from './assets/otro.png'

function Otros() {
  return (
    <div className='h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex flex-col justify-center items-center'>
      <a href="https://www.google.com/search?q=como+no+meterse+en+asuntos+ajenos&sca_esv=592504798&sxsrf=AM9HkKkplOORRI_3lxyki_xX_pIevaGpTA%3A1703076100880&ei=BOGCZaaUNezQkPIP3s-euA4&oq=como+no+meterse+en+asuntos+agenos&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIiFjb21vIG5vIG1ldGVyc2UgZW4gYXN1bnRvcyBhZ2Vub3MyBxAhGKABGAoyBxAhGKABGAoyBRAhGJ8FSJBbUIpOWI1ZcAJ4AZABAJgB1QGgAYoSqgEGMC4xMy4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBhAAGBYYHsICCxAAGIAEGIoFGIYDwgIKEAAYFhgeGA8YCsICBRAhGKABwgIEECEYFeIDBBgAIEGIBgGQBgg&sclient=mobile-gws-wiz-serp#sbfbu=0&pi=como%20no%20meterse%20en%20asuntos%20ajenos">
        <img width={300} src={Loco} alt="Mi loco dele pa' fuera" />
      </a>

    </div>
  )
}

export default Otros

import React from 'react'
import { useNavigate } from 'react-router-dom';

import Signature from '../Signature'

function KnowledgeTest() {
  
  const numbers = [806,318,774,675,731,329];
  const navigate = useNavigate();
  
  let shuffledNumbers = numbers.sort(function () {
    return Math.random() - 0.5;
  });
  
  const handleNumber = (num) => {
    if (num === 318) {
      navigate('/media-selector');
    } else {
      navigate("https://www.google.com/search?q=como+no+meterse+en+asuntos+ajenos&sca_esv=592504798&sxsrf=AM9HkKkplOORRI_3lxyki_xX_pIevaGpTA%3A1703076100880&ei=BOGCZaaUNezQkPIP3s-euA4&oq=como+no+meterse+en+asuntos+agenos&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIiFjb21vIG5vIG1ldGVyc2UgZW4gYXN1bnRvcyBhZ2Vub3MyBxAhGKABGAoyBxAhGKABGAoyBRAhGJ8FSJBbUIpOWI1ZcAJ4AZABAJgB1QGgAYoSqgEGMC4xMy4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBhAAGBYYHsICCxAAGIAEGIoFGIYDwgIKEAAYFhgeGA8YCsICBRAhGKABwgIEECEYFeIDBBgAIEGIBgGQBgg&sclient=mobile-gws-wiz-serp#sbfbu=0&pi=como%20no%20meterse%20en%20asuntos%20ajenos")
    }
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='m-8'>Cuál número representa algo para mí?</h1>
      </div>
      <div className='flex items-center justify-center w-11/12 m-auto flex-wrap'>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[0])}}>{shuffledNumbers[0]}</div>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[1])}}>{shuffledNumbers[1]}</div>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[2])}}>{shuffledNumbers[2]}</div>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[3])}}>{shuffledNumbers[3]}</div>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[4])}}>{shuffledNumbers[4]}</div>
        <div className='w-1/3 m-4 bg-sky-800 p-4 text-center text-bold btn' onClick={()=>{handleNumber(shuffledNumbers[5])}}>{shuffledNumbers[5]}</div>
      </div>
      <Signature />
    </>
  )
}

export default KnowledgeTest

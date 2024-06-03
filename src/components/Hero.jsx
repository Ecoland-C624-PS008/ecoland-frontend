import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-green-400 font-bold p-2'>SEWA LAHAN JADI MUDAH</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#74c69d]'>ECO LAND</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#74c69d]'>Lihat,tawar,deal</p>
        </div>
        <ReactTyped className='text-[#74c69d] first-line:md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'
          strings={['CARI','DISKUSI','TRANSAKSI']} 
          typeSpeed={120} 
          backSpeed={140} loop
          />
        <p className='md:text-2xl text-xl font-bold text-gray-500 pt-5'>FABIL,AZMI,ZAENAL</p>
        <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>CARI LAHAN</button>
      </div>
    </div>
  )
}

export default Hero;
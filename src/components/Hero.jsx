// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactTyped } from "react-typed";
import landImage from '../assets/lands.jpg';

const Hero = () => {
  return (
    <div className='text-white' style={{ backgroundImage: `url(${landImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='max-w-[100%] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-green-400 font-bold p-2'>Sewa Lahan Bisnis Hijau Menjadi Semakin Mudah</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-green-400'>ECOLAND</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-green-400'>Lihat,tawar,deal</p>
        </div>
        <ReactTyped className='text-[#74c69d] first-line:md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'
          strings={['CARI','DISKUSI','TRANSAKSI']} 
          typeSpeed={120} 
          backSpeed={140} loop
          />
        <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 font-bold transition duration-300 ease-in-out hover:bg-green-600'>CARI LAHAN</button>
      </div>
    </div>
  )
}

export default Hero;
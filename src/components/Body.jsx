import React from 'react'
import ecoland from '../assets/ecoland.png'
const Body = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ecoland} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-green-500 font-bold'>ECOLAND</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            CAPSTONE
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum optio suscipit nihil facilis facere, sed consequatur similique quod animi nulla inventore sint voluptatum mollitia exercitationem necessitatibus repudiandae doloremque dolore!
          </p>
          <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0'>CARI LAHAN</button>
        </div>


      </div>
    </div>
  )
}

export default Body;
import React from 'react'
import sewa from '../assets/sewa.jpg'
import iklan from '../assets/iklan.jpg'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={sewa} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>SEWA LAHAN</h2>
                <p className='text-center text-4xl font-bold'>mulai sewa</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>ayo</p>
                    <p className='py-2 border-b mx-8 '>sewa</p>
                    <p className='py-2 border-b mx-8 '>sekarang</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>AYO SEWA</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={iklan} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>PASANG IKLAN LAHAN</h2>
                <p className='text-center text-4xl font-bold'>mulai iklan</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>ayo</p>
                    <p className='py-2 border-b mx-8 '>pasang iklan</p>
                    <p className='py-2 border-b mx-8 '>sekarang</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>pasang iklan</button>
            </div>

        </div>

    </div>
  )
}

export default Cards
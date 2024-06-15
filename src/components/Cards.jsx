// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaSeedling, FaBullhorn } from 'react-icons/fa';


const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <h1 className='text-4xl font-bold text-center mb-10'>Apa yang ingin Anda lakukan?</h1>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                <div className='w-full shadow-md border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <FaSeedling size="80" className='text-5xl text-green-500 mx-auto pt-5' />
                    <h2 className='text-2xl font-bold text-center py-8'>Mulai Bisnis Hijau</h2>
                    <p className='text-center text-4xl'>mulai sewa</p>
                    <button className='bg-green-500 text-white font-bold w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-600'>Sewa Lahan</button>
                </div>
                <div className='w-full shadow-md border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <FaBullhorn size="80" className='text-5xl text-green-500 mx-auto pt-5' />
                    <h2 className='text-2xl font-bold text-center py-8'>Pasang Iklan Lahan</h2>
                    <p className='text-center text-4xl'>mulai iklan</p>
                    <button className='bg-green-500 text-white font-bold w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-600'>Sewakan Lahan</button>
                </div>

            </div>

        </div>
    )
}

export default Cards
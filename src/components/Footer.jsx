// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div className='max-w-[100%] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-200 bg-[#212529]'>
        <h1 className='w-full text-3xl font-bold text-white'>ECOLAND FOOTER</h1>
        <p className='text-sm text-gray-400'>Platform web penyewaan bisnis lahan hijau berbasis di Indonesia.</p>
        <p className='text-sm text-gray-400'>&copy; {currentYear} Ecoland. All rights reserved.</p>
      </div>
    );
  };

export default Footer
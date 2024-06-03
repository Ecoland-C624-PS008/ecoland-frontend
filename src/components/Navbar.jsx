import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24  mx-auto px-4 text-white border-b border-green bg-[#b7efc5]'>
      <h1 className='w-full text-4xl font-bold text-[#16db65]'>ECOLAND</h1>
      <ul className='hidden md:flex'>
        <li className='font-bold text-xl p-4 text-white'>Home</li>
        <li className='font-bold text-xl p-4 text-white'>Login</li>
        <li className='font-bold text-xl p-4 text-white'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ECOLAND</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Login</li>
          <li className='p-4 border-b border-gray-600'>About</li>
      </ul>
    </div>
  );
};

export default Navbar;

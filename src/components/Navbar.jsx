// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-20 mx-auto px-4 text-white bg-green-500'>
      <h1 className='w-full text-4xl font-bold text-white'>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <FaLeaf size={20} color="white" style={{ marginRight: '8px' }} />
          EcoLand
        </Link>
      </h1>
      <ul className='hidden md:flex'>
        <li className='font-bold text-l p-2 text-white'><Link to="/login" className='border-2 border-green-800 text-green-800 py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-green-800 hover:text-white'>Masuk</Link></li>
        <li className='font-bold text-l p-2 text-white'><Link to="/register" className='border-2 border-green-700 py-2 px-6 rounded-lg bg-green-700 text-white transition duration-300 ease-in-out hover:bg-green-800 hover:border-green-800'>Daftar</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;

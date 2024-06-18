// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLeaf, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../utils/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`flex justify-between fixed w-full items-center h-20 text-white bg-green-500 ${scroll ? 'shadow-xl' : ''}`}>
      <h1 className='w-full text-4xl font-bold text-white'>
        <Link to="/lands" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <FaLeaf size={32} color="white" style={{ marginRight: '8px', marginLeft: '15px' }} />
          EcoLand
        </Link>
      </h1>
      <ul className='hidden md:flex'>
      {user && user.role === "admin" && (
        <li className='font-bold text-l p-2 text-white'><Link to="/dashboard" className='border-2 border-green-700 py-2 px-6 rounded-lg bg-green-700 text-white transition duration-300 ease-in-out hover:bg-green-800 hover:border-green-800'>Dashboard</Link></li>
      )};
        <button onClick={logout} className="bg-red-600 font-bold flex items-center py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-700 mr-[15px]">
          <FaSignOutAlt className="mr-2" />
            Keluar
        </button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;

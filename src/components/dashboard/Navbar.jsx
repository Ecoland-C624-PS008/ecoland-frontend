// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className="flex justify-between items-center bg-green-500 text-white p-4 fixed w-full h-[56px] z-10">
      <div className="flex items-center">
        <FaLeaf size={24} className="mr-2" />
        <h1><Link to="/dashboard" className="font-bold text-2xl">EcoLand</Link></h1>
      </div>
      <div className="ml-auto">
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;

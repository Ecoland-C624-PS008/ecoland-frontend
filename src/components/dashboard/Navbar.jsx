// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className="flex justify-between items-center bg-green-500 text-white p-4 fixed w-full h-[56px] z-10">
      <div className="flex items-center">
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <div className="md:block md:hidden hidden">
        X
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;

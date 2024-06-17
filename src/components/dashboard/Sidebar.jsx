// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaUserCircle, FaTachometerAlt, FaTree, FaExchangeAlt, FaFileContract, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../utils/authSlice";

const Sidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className={`h-screen w-64 bg-gray-800 text-white fixed top-14 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center p-4">
        <div className="ml-4 flex items-center">
          <FaUserCircle className="mr-4" size="30" />
          <p className="text-lg font-semibold">{user && user.name}</p>
        </div>
      </div>
      <nav className="mt-6 flex-grow">
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="flex items-center p-4 hover:bg-gray-700">
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/lands-admin" className="flex items-center p-4 hover:bg-gray-700">
              <FaTree className="mr-2" />
              Lands
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/transactions" className="flex items-center p-4 hover:bg-gray-700">
              <FaExchangeAlt className="mr-2" />
              Transactions
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/land-rental" className="flex items-center p-4 hover:bg-gray-700">
              <FaFileContract className="mr-2" />
              Land Rental
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/users" className="flex items-center p-4 hover:bg-gray-700">
              <FaUsers className="mr-2" />
              Users
            </Link>
          </li>
          <li className="mb-2">
            <button onClick={logout} className="flex items-center p-4 hover:bg-red-600">
              <FaSignOutAlt className="mr-2" />
              Keluar
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;

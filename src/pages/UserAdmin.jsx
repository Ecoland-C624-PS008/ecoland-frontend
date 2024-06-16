// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';

const UserAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-grow bg-gray-100">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {/* MAIN CONTENT */}
        <div className="p-6 mt-16 md:ml-[250px]">
          <h1 className="text-2xl font-bold mb-4">Data User</h1>
          <p>Test text</p>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;

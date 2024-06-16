// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';

const LandAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-grow bg-gray-100">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="p-6 mt-16">
          <h1 className="text-2xl font-bold mb-4">LandAdmin</h1>
          <p>Test text</p>
        </div>
      </div>
    </div>
  );
};

export default LandAdmin;

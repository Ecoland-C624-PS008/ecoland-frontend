// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';

const DashboardAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-grow bg-gray-100">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {/* Main content */}
        <div className="p-6 mt-16 md:ml-[250px]">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Welcome to the admin dashboard. Here you can manage lands, transactions, land rentals, and users.</p>
          {/* Add more content specific to the admin dashboard here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

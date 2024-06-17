import React, { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar isOpen={isOpen} />
        <div className="flex-grow bg-gray-100">
          <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          {/* Main content */}
          <main>{ children }</main>
        </div>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

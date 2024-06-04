import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk membuat tautan

const Register = () => {
  // Logika pendaftaran pengguna
  
  return (
    <div className="flex justify-center items-center h-screen bg-[#b7efc5]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#16db65]">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full px-4 py-2 text-white bg-[#16db65] rounded-lg hover:bg-[#14c053]">Register</button>
        </form>
        {/* Tautan untuk kembali ke halaman login */}
        <p className="text-center text-sm text-gray-700">
          Sudah punya akun? <Link to="/login" className="text-[#16db65]">Login disini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

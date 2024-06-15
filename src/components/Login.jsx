// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#16db65]">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Masukkan password Anda"
            />
          </div>
          <button className="w-full px-4 py-2 text-white bg-[#16db65] rounded-lg hover:bg-[#14c053]">Login</button>
          <p className="text-center text-sm text-gray-700">Belum punya akun? <Link to="/register" className="text-[#16db65]">Daftar disini</Link></p> {/* Tautan ke halaman register */}
        </form>
      </div>
    </div>
  );
};

export default Login;

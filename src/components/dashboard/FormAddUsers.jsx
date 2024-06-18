// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://submission-mgce-zaenalalfian-0.et.r.appspot.com/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 mt-16 md:ml-[250px]">
      <div className="w-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Form Pengguna</h2>
        <form onSubmit={saveUser}>
          <p className="has-text-centered">{msg}</p>
          {/* Nama Lengkap */}
          <div className="mb-4">
            <label htmlFor="nama-lengkap" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            <input 
              id="nama" 
              type="text" 
              placeholder="Nama Lengkap" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Alamat Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Kata Sandi</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Konfirmasi Password */}
          <div className="mb-4">
            <label htmlFor="conf-password" className="block text-gray-700 text-sm font-bold mb-2">Konfirmasi Sandi</label>
            <input 
              id="conf-password" 
              type="password" 
              placeholder="Konfirmasi Kata Sandi"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Roles */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role User</label>
            <select
              id="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </div>
          
          {/* Submit Button */}
          <div className="flex items-center justify-left">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Daftarkan</button>

            <Link to="/users" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">Batal</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddUsers;
    
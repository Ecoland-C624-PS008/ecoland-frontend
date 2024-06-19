// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk membuat tautan
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, reset } from "../api/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(RegisterUser({ name, email, password }));
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#16db65]">Register</h2>
        <form onSubmit={Auth} className="space-y-4">
          {isError && message}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input 
              type="text"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukan Nama Lengkap"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Masukan Email Anda"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              placeholder="Masukan Password Anda"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white font-bold bg-[#16db65] rounded-lg hover:bg-[#14c053]">
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-700">
          Sudah punya akun? <Link to="/login" className="text-[#16db65] font-bold">Masuk disini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

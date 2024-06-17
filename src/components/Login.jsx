// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../utils/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#16db65]">Login</h2>
        <form onSubmit={Auth} className="space-y-4">
          {isError && <p className="has-text-centered">{message}</p>}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16db65]" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password Anda"
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white font-bold bg-[#16db65] rounded-lg hover:bg-[#14c053]">
              {isLoading ? "Loading..." : "Login"}
          </button>
          <p className="text-center text-sm text-gray-700">Belum punya akun? <Link to="/register" className="text-[#16db65] font-bold">Daftar disini</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

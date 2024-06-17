// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";
import Navbar from "../../components/main/Navbar";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, user, navigate]);

  return (
    <div className="flex">
      <Navbar />
      <div className="p-6 mt-16">
        {/* MASUKAN KONTEN MAIN PAGE DI SINI */}
        <h1 className="text-2xl font-bold mb-4">Homepage</h1>
        <p>Test text</p>
      </div>
    </div>
  );
};

export default MainPage;
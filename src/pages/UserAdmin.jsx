// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from '../pages/Layout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utils/authSlice";

const UserAdmin = () => {
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
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <div className="p-6 mt-16 md:ml-[250px]">
        <h1 className="text-2xl font-bold mb-4">Data User</h1>
        <p>Test text</p>
      </div>
    </Layout>
  );
};

export default UserAdmin;
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from '../pages/Layout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utils/authSlice";

const DashboardAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/lands");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <div className="p-6 mt-16 md:ml-[250px]">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can manage lands, transactions, land rentals, and users.</p>
      </div>
    </Layout>
  );
};

export default DashboardAdmin;

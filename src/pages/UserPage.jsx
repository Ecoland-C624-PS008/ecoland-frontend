// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from '../pages/Layout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/authSlice";
import UsersList from '../components/dashboard/UsersList';

const UserPage = () => {
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
      navigate("/lands");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <div className="p-6 mt-16 md:ml-[250px]">
        <UsersList />
      </div>
    </Layout>
  );
};

export default UserPage;
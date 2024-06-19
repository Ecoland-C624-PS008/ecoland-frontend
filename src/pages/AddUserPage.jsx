// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddUsers from "../components/dashboard/FormAddUsers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/authSlice";

const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddUsers />
    </Layout>
  );
};

export default AddUserPage;

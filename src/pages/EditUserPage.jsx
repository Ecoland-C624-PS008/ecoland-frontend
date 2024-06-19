// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditUsers from "../components/dashboard/FormEditUsers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/authSlice";

const EditUserPage = () => {
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
      <FormEditUsers />
    </Layout>
  );
};

export default EditUserPage;

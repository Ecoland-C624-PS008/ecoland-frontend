// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddLands from "../components/dashboard/FormAddLands";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/authSlice";

const AddLandPage = () => {
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
      <FormAddLands />
    </Layout>
  );
};

export default AddLandPage;

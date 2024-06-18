// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";
import Navbar from "../../components/main/Navbar";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { MdDateRange } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import cardDataArray from '../../data/dataLahan';
 // Adjust the import path as necessary

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
      <div className="p-6 mt-16 grid grid-cols-3 gap-4">
        {cardDataArray.map((cardData, index) => (
          <Card key={index}>
            <div className="absolute text-white px-2 py-1 bg-orange-500 rounded-lg">KATEGORI</div>
            <img src={cardData.imageUrl} alt={cardData.title} />
            <CardHeader>
              <CardTitle>{cardData.title}</CardTitle>
              <CardDescription>
                <h2>{cardData.description}</h2>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Additional content if needed */}
            </CardContent>
            <CardFooter className="bg-slate-500 flex justify-between items-center text-white rounded-lg text-2xl p-2">
              <div className="flex items-center">
                <MdDateRange /> Listed on: {cardData.dateListed}
              </div>
              <div className="flex items-center">
                <TbHandClick />
                <button className="ml-2">LIHAT LAHAN</button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainPage;

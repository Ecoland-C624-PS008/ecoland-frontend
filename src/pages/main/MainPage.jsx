// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";
import Navbar from "../../components/main/Navbar";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { MdDateRange } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import cardDataArray from '../../data/dataLahan'; // Adjust the import path as necessary
import PropTypes from "prop-types";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"

const ITEMS_PER_PAGE = 6; // Adjust the number of items per page as needed

const PaginationSection = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href="#" isActive={index + 1 === currentPage} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, user, navigate]);

  const totalPages = Math.ceil(cardDataArray.length / ITEMS_PER_PAGE);
  const currentItems = cardDataArray.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((cardData, index) => (
            <Card key={index}>
              <img src={cardData.imageUrl} alt={cardData.title} className="w-full h-48 object-cover" />
              <CardHeader >
                <div className="flex flex-row justify-between">
                <CardTitle>{cardData.title}</CardTitle>
                <div className="bg-orange-500 text-white px-2 py-1 rounded-lg ml-2">
                  KATEGORI
                </div>
                </div>
              </CardHeader>
              <CardDescription className="px-4">
                <h2>{cardData.description}</h2>
              </CardDescription>
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
        <div className="mt-4 flex justify-center">
          <PaginationSection
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};


PaginationSection.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default MainPage;

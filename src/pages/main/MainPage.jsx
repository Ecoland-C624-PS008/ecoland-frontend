// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../api/authSlice";
import Navbar from "../../components/main/Navbar";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { MdDateRange } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import cardDataArray from '../../data/dataLahan'; // Adjust the import path as necessary
import PropTypes from "prop-types";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

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
  const [lands, setLands] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // FETCHING API DATA LAHAN
  useEffect(() => {
    getLands();
  }, []);

  const getLands = async () => {
    const response = await axios.get("http://localhost:5000/lands", {
      withCredentials: true
  });
    setLands(response.data);
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, user, navigate]);

  const totalPages = Math.ceil(cardDataArray.length / ITEMS_PER_PAGE);
  const currentItems = lands.slice(
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
          {currentItems.map((land) => (
            <Card key={land.uuid}>
              <img src={land.image} alt={land.nama_lahan} className="w-full h-48 object-cover" />
              <CardHeader >
                <div className="flex flex-row justify-between">
                <CardTitle>{land.nama_lahan}</CardTitle>
                <div className="bg-orange-500 text-white px-2 py-2 rounded-lg ml-2">
                  {land.status}
                </div>
                </div>
              </CardHeader>
              <CardDescription className="px-4">
                <h2>{land.keterangan}</h2>
              </CardDescription>
              <CardContent>
                {/* Additional content if needed */}
              </CardContent>
              <CardFooter className="py-2 bg-slate-500 flex justify-between items-center rounded-lg text-l p-2">
                <div className="flex text-white items-center">
                  <MdDateRange /> Diposting pada {format(new Date(land.createdAt), 'dd-MM-yyyy')}
                </div>
                <div className="flex text-white font-bold items-center">
                  <TbHandClick />
                  <Link to={`/lands/detail/${land.uuid}`}className="ml-2">LIHAT LAHAN</Link>
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

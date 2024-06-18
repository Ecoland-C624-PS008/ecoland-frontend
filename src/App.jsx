// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'; 
import DashboardAdmin from './pages/DashboardAdmin';
import LandPage from './pages/LandPage';
import TransactionAdmin from './pages/TransactionAdmin';
import UserPage from './pages/UserPage';
import RentalAdmin from './pages/RentalAdmin';
import Profile from './components/main/Profile';
import MainPage from './pages/main/MainPage';
import AddLandPage from './pages/AddLandPage';
import AddUserPage from './pages/AddUserPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Body />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
          </>
        } />
        <Route path="/register" element={
          <>
            <Navbar />
            <Register />
          </>
        } />
        <Route path="/lands" element={<MainPage />} />
        <Route path="/land-detail" element={<DetailPage />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/lands-admin" element={<LandPage />} />
        <Route path="/lands-admin/add" element={<AddLandPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="/transactions" element={<TransactionAdmin />} />
        <Route path="/land-rental" element={<RentalAdmin />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/profile" element={
          <>
            <Navbar />
            <Profile />
          </>
        } /> {}
      </Routes>
    </Router>
  );
}

export default App;

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
import LandAdmin from './pages/LandAdmin';
import TransactionAdmin from './pages/TransactionAdmin';
import UserAdmin from './pages/UserAdmin';
import RentalAdmin from './pages/RentalAdmin';
import Profile from './components/main/Profile';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={
        <>
          <Navbar />
          <Body />
          <MainPage />
          <Footer />
        </>
        }/>
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
        <Route path="/home" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/lands" element={<LandAdmin />} />
        <Route path="/transactions" element={<TransactionAdmin />} />
        <Route path="/land-rental" element={<RentalAdmin />} />
        <Route path="/users" element={<UserAdmin />} />
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

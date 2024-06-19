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
import TransactionAdmin from './pages/TransactionPage';
import UserPage from './pages/UserPage';
import HistoryPage from './pages/HistoryPage';
import Profile from './components/main/Profile';
import MainPage from './pages/main/MainPage';
import AddLandPage from './pages/AddLandPage';
import EditLandPage from './pages/EditLandPage';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';
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
        <Route path="/lands/detail" element={<DetailPage />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/lands-admin" element={<LandPage />} />
        <Route path="/lands-admin/add" element={<AddLandPage />} />
        <Route path="/lands-admin/edit/:id" element={<EditLandPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="/transactions" element={<TransactionAdmin />} />
        <Route path="/history" element={<HistoryPage />} />
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

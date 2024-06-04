import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Body />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

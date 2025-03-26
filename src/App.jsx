// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Stream from './pages/Stream';
import Events from './pages/Events';
import Plays from './pages/Plays';
import Sports from './pages/Sports';
import Activities from './pages/Activities';
import Booking from './pages/Booking';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/movies-mumbai" element={<Movies />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/events-mumbai" element={<Events />} />
        <Route path="/plays-mumbai" element={<Plays />} />
        <Route path="/sports-mumbai" element={<Sports />} />
        <Route path="/activities-mumbai" element={<Activities />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

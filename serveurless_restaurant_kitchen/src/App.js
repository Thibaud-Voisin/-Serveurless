import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Tickets from './Tickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;

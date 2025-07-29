import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortener from './components/URLShortener';
import Statistics from './components/Statistics';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<URLShortener />} />
      <Route path="/stats" element={<Statistics />} />
      {/* Redirection logic will go here */}
    </Routes>
  </Router>
);

export default AppRoutes;

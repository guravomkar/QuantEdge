import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Landing Page Imports
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup.js';
import Aboutpage from './landing_page/about/AboutPage.js';
import Productpage from './landing_page/products/ProductsPage.js';
import Supportpage from './landing_page/support/SupportPage.js';
import Pricingpage from './landing_page/pricing/PrincingPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFound.js';
import Login from './landing_page/signup/Login';

// NEW: Import the OfferingsPage component
import OfferingsPage from './landing_page/products/OfferingsPage'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/product" element={<Productpage />} />
      
      {/* NEW ROUTE: Maps /offerings to the new page */}
      <Route path="/offerings" element={<OfferingsPage />} />

      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
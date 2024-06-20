import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import ConatctUs from './pages/ConatctUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from "./pages/TermsCondition"
const App = () => {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/pricavy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-condition' element={<TermsCondition />} />
        <Route path='/contact' element={<ConatctUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
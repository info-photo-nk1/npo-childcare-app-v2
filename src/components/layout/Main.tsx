import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MatchPage from '../../pages/MatchPage';
import InfoPage from '../../pages/InfoPage';
import ContactPage from '../../pages/ContactPage';
import RentalPage from '../../pages/RentalPage';
import CommunityPage from '../../pages/CommunityPage';

const Main = () => {
  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match/*" element={<MatchPage />} />
        <Route path="/info/*" element={<InfoPage />} />
        <Route path="/contact/*" element={<ContactPage />} />
        <Route path="/rental/*" element={<RentalPage />} />
        <Route path="/community/*" element={<CommunityPage />} />
      </Routes>
    </main>
  );
};

export default Main;

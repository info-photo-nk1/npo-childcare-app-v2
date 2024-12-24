import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import LoginPage from './pages/LoginPage';
import MatchPage from './pages/MatchPage';
import ContactPage from './pages/ContactPage';
import InfoPage from './pages/InfoPage';
import DiaryPage from './pages/DiaryPage';
import FaqPage from './pages/FaqPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RentalPage from './pages/RentalPage';
import RentalDetailPage from './pages/RentalDetailPage';
import FacilityDetailPage from './pages/FacilityDetailPage';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/match/facilities/:id" element={<FacilityDetailPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/rental" element={<RentalPage />} />
          <Route path="/rental/:id" element={<RentalDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

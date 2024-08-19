import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ChooseRegistration from './components/ChooseRegistration';
import RegisterIndividual from './components/RegisterIndividual';
import RegisterAgency from './components/RegisterAgency';
import RegisterBusiness from './components/RegisterBusiness';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar /> {/* Use MyNavbar */}
        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<ChooseRegistration />} />
            <Route path="/register/individual" element={<RegisterIndividual />} />
            <Route path="/register/agency" element={<RegisterAgency />} />
            <Route path="/register/business" element={<RegisterBusiness />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

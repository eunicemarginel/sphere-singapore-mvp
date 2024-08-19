import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ChooseRegistration from './components/ChooseRegistration';
import RegisterIndividual from './components/RegisterIndividual';
import RegisterAgency from './components/RegisterAgency';
import RegisterBusiness from './components/RegisterBusiness';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Sphere Singapore</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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

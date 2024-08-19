import React from 'react';
import { Link } from 'react-router-dom';

const ChooseRegistration = () => {
  return (
    <div className="text-center">
      <h1>Register as:</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <Link to="/register/individual" className="btn btn-primary btn-lg btn-block">Individual</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/register/agency" className="btn btn-success btn-lg btn-block">Security Agency</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/register/business" className="btn btn-warning btn-lg btn-block">Business</Link>
        </div>
      </div>
    </div>
  );
}

export default ChooseRegistration;

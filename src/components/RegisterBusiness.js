import React, { useState } from 'react';

const RegisterBusiness = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Business Registration Successful!');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register as Business</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Business Name" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Company UEN Number" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Business Address" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Type of Business" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Contact Person" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Contact Number" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-warning">Register</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default RegisterBusiness;

import React, { useState } from 'react';

const RegisterAgency = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Agency Registration Successful!');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register as Security Agency</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Agency Name" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="License Number" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Company UEN" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Contact Person" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Contact Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default RegisterAgency;

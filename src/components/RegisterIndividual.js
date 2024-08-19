import React, { useState } from 'react';

const RegisterIndividual = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Individual Registration Successful!');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register as Individual</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="NRIC/FIN No" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Security License Number" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Mobile Number" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default RegisterIndividual;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../service/api-service'; 

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform registration logic here (e.g., send API request)
    const user = {
      id: 2442826,
      name,
      email,
      gender,
      status,
    };
    // Call the registerUser function from the service file
    await registerUser(user);



    // Redirect to '/x' after successful registration
    navigate('/');
  };

  return (
    
    <div className="container">
    <h1 className='form-heading'>Registration Form</h1>
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender:
        </label>
        <select
          id="gender"
          className="form-select"
          value={gender}
          onChange={handleGenderChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          Status:
        </label>
        <select
          id="status"
          className="form-select"
          value={status}
          onChange={handleStatusChange}
          required
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    {/* {showPopup && (
      <div className="popup">
        <div className="popup-content">
          <h2>User Created!</h2>
          <p>User has been registered successfully.</p>
          <button onClick={() => setShowPopup(false)} className="btn btn-primary">Close</button>
        </div>
      </div>
    )} */}
  </div>
  );
};

export default RegistrationForm;

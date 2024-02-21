import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    if (username === 'udit' && password === '1123') {
      login(); 
      navigate('/update-cv');
    } else {
      setErrorMessage('Invalid email/password');
    }
  };

  return (
    <div className="login-form-container my-5">
      <h2 className='text-center'>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form mt-4">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;

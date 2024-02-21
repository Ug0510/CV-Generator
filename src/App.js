import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CV from './pages/CV/CV';
import Footer from './components/Footer/Footer';
import fetchData from './utils/fetchData';
import AdminForm from './pages/AdminForm/AdminForm';
import LoginForm from './pages/LoginForm/LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    if(localStorage.getItem('CVData') == null)
    {
      fetchData();
    }
    // Check if the user is already logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    // Timer to automatically log out the user after 1 hour
    const logoutTimer = setTimeout(() => {
      logout();
    }, 180000); 

    return () => {
      clearTimeout(logoutTimer);
    };
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CV />} />
        {isLoggedIn ? (
          <Route path="/update-cv" element={<AdminForm />} />
        ) : (
          <Route path="/update-cv" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<LoginForm login={login} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

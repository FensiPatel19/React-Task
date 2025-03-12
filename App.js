import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/signup">Signup</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/home">Home</Link> | 
          <Link to="/change-password">Change Password</Link> | 
          <Link to="/profile">Profile</Link> | 
          <Link to="/forgot-password">Forgot Password</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

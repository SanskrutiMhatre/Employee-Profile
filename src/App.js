// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/UserProfile.css'; // Adjust the path if needed
import UserProfile from './components/UserProfile';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

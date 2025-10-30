// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import UserProfile from './UserProfile';
import PrakritiAnalysis from './PrakritiAnalysis';
import DietChart from './DietChart';
import DailySchedule from './DailySchedule';
import FollowUps from './FollowUps';
import AdminPanel from './AdminPanel';

function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/prakriti">Prakriti Analysis</NavLink>
      <NavLink to="/diet">Diet Chart</NavLink>
      <NavLink to="/schedule">Daily Schedule</NavLink>
      <NavLink to="/followups">Follow-up</NavLink>
      <NavLink to="/admin">Admin Panel</NavLink>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/prakriti" element={<PrakritiAnalysis />} />
        <Route path="/diet" element={<DietChart />} />
        <Route path="/schedule" element={<DailySchedule />} />
        <Route path="/followups" element={<FollowUps />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
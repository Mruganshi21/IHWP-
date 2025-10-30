// src/UserProfile.js
import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'Male',
    healthConditions: ''
  });

  // Load existing profile from local storage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved successfully!');
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} required />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={profile.age} onChange={handleChange} required />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={profile.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label htmlFor="healthConditions">Existing Health Conditions (if any)</label>
        <textarea id="healthConditions" name="healthConditions" value={profile.healthConditions} onChange={handleChange} rows="4"></textarea>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
// src/AdminPanel.js
import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // This is a simplified example. A real app would fetch data for multiple users.
    // Here, we just pull all data from the current user's local storage.
    const profile = JSON.parse(localStorage.getItem('userProfile'));
    const prakriti = localStorage.getItem('prakritiResult');
    const feedback = JSON.parse(localStorage.getItem('userFeedback'));
    
    setUserData({ profile, prakriti, feedback });
  }, []);

  if (!userData || !userData.profile) {
    return <div className="container"><h1>Admin Panel</h1><p>No user data found in local storage.</p></div>;
  }

  return (
    <div className="container">
      <h1>Admin Panel - Student Data</h1>
      
      <div className="card">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {userData.profile.name}</p>
        <p><strong>Email:</strong> {userData.profile.email}</p>
        <p><strong>Age:</strong> {userData.profile.age}</p>
        <p><strong>Gender:</strong> {userData.profile.gender}</p>
        <p><strong>Health Conditions:</strong> {userData.profile.healthConditions}</p>
      </div>
      
      <div className="card">
        <h2>Prakriti Analysis Result</h2>
        <p><strong>Dominant Prakriti:</strong> {userData.prakriti || 'Not completed'}</p>
      </div>

      <div className="card">
        <h2>User Feedback & Follow-ups</h2>
        {userData.feedback && userData.feedback.length > 0 ? (
            <ul>
                {userData.feedback.map((item, index) => (
                   <li key={index}><strong>{item.date}:</strong> {item.text}</li>
                ))}
            </ul>
        ) : (
            <p>No feedback has been submitted.</p>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
// src/DailySchedule.js
import React, { useState, useEffect } from 'react';

const scheduleData = {
  Vata: [
    "Wake up by 6:00 AM",
    "Light exercise (Yoga, walking): 6:30 AM - 7:00 AM",
    "Meditation: 7:00 AM - 7:15 AM",
    "Breakfast: 8:00 AM",
    "Lunch (main meal): 12:00 PM - 1:00 PM",
    "Dinner (light): 6:00 PM - 7:00 PM",
    "Bedtime by 10:00 PM",
  ],
  Pitta: [
    "Wake up by 5:30 AM",
    "Cooling exercise (Swimming, moderate jogging): 6:00 AM - 6:45 AM",
    "Meditation: 6:45 AM - 7:00 AM",
    "Breakfast: 7:30 AM",
    "Lunch (main meal): 12:00 PM",
    "Dinner (moderate): 7:00 PM - 7:30 PM",
    "Bedtime by 10:30 PM",
  ],
  Kapha: [
    "Wake up by 5:00 AM",
    "Vigorous exercise (Running, cardio): 6:00 AM - 7:00 AM",
    "Meditation: 7:00 AM - 7:15 AM",
    "Breakfast (light, optional): 8:30 AM",
    "Lunch (main meal): 1:00 PM",
    "Dinner (very light): 7:00 PM",
    "Bedtime by 11:00 PM",
  ],
};

function DailySchedule() {
  const [prakriti, setPrakriti] = useState(null);

  useEffect(() => {
    const savedPrakriti = localStorage.getItem('prakritiResult');
    if (savedPrakriti) {
      setPrakriti(savedPrakriti);
    }
  }, []);

  if (!prakriti) {
    return (
        <div className="container">
            <h1>Daily Schedule</h1>
            <p>Please complete the Prakriti Analysis to get your personalized daily schedule.</p>
        </div>
    );
  }

  const schedule = scheduleData[prakriti];

  return (
    <div className="container">
      <h1>Recommended Daily Schedule for {prakriti}</h1>
      <div className="card">
        <ul>
          {schedule.map((item, index) => (
            <li key={index} style={{padding: '0.5rem 0'}}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DailySchedule;
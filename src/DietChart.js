// src/DietChart.js
import React, { useState, useEffect } from 'react';

const dietData = {
  Vata: {
    foodsToFavor: "Warm, cooked, nourishing foods like soups, stews, rice, sweet potatoes, and ripe fruits. Use ghee and healthy oils.",
    foodsToAvoid: "Cold, dry, and raw foods. Avoid caffeine, processed sugar, and heavily spiced foods."
  },
  Pitta: {
    foodsToFavor: "Cooling, refreshing foods like salads, cucumbers, melons, coconut, and whole grains.",
    foodsToAvoid: "Spicy, oily, and fried foods. Limit salt, sour fruits, and alcohol."
  },
  Kapha: {
    foodsToFavor: "Light, warm, and dry foods. Focus on leafy greens, beans, lentils, and pungent spices like ginger and black pepper.",
    foodsToAvoid: "Heavy, oily, and cold foods. Reduce dairy, sweets, and fatty foods."
  },
};

function DietChart() {
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
        <h1>Diet Chart</h1>
        <p>Please complete the Prakriti Analysis first to get your personalized diet chart.</p>
      </div>
    );
  }

  const chart = dietData[prakriti];

  return (
    <div className="container">
      <h1>Diet Chart for {prakriti} Prakriti</h1>
      <div className="card">
        <h3>Foods to Favor</h3>
        <p>{chart.foodsToFavor}</p>
      </div>
      <div className="card">
        <h3>Foods to Avoid</h3>
        <p>{chart.foodsToAvoid}</p>
      </div>
    </div>
  );
}

export default DietChart;
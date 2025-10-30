// src/PrakritiAnalysis.js
import React, { useState, useEffect } from 'react';

const questions = [
  { question: "Body Frame:", options: ["Slim", "Medium", "Large"], types: ["Vata", "Pitta", "Kapha"] },
  { question: "Skin Type:", options: ["Dry, rough", "Sensitive, oily", "Thick, smooth"], types: ["Vata", "Pitta", "Kapha"] },
  { question: "Appetite:", options: ["Irregular, variable", "Strong, sharp", "Slow but steady"], types: ["Vata", "Pitta", "Kapha"] },
  { question: "Mental Nature:", options: ["Restless, active", "Intelligent, sharp", "Calm, stable"], types: ["Vata", "Pitta", "Kapha"] },
  { question: "Sleep Pattern:", options: ["Light, interrupted", "Sound, moderate", "Deep, long"], types: ["Vata", "Pitta", "Kapha"] },
];

function PrakritiAnalysis() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    const savedResult = localStorage.getItem('prakritiResult');
    if (savedResult) {
      setResult(savedResult);
    }
  }, []);

  const handleAnswerChange = (questionIndex, type) => {
    setAnswers({ ...answers, [questionIndex]: type });
  };

  const calculatePrakriti = () => {
    const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(answers).forEach(type => {
      counts[type]++;
    });

    const dominantPrakriti = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(dominantPrakriti);
    localStorage.setItem('prakritiResult', dominantPrakriti);
    alert(`Your dominant Prakriti is: ${dominantPrakriti}`);
  };

  return (
    <div className="container">
      <h1>Prakriti Analysis</h1>
      {result ? (
        <div className="card">
            <h2>Your Dominant Prakriti is: <strong>{result}</strong></h2>
            <p>You can now check your recommended diet and daily schedule.</p>
        </div>
      ) : (
        <div>
          {questions.map((q, index) => (
            <div key={index} className="card">
              <p><strong>{q.question}</strong></p>
              {q.options.map((option, i) => (
                <label key={i} style={{ display: 'inline-block', marginRight: '20px' }}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    onChange={() => handleAnswerChange(index, q.types[i])}
                  /> {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={calculatePrakriti}>Calculate My Prakriti</button>
        </div>
      )}
    </div>
  );
}

export default PrakritiAnalysis;
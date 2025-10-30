// src/FollowUps.js
import React, { useState, useEffect } from 'react';

function FollowUps() {
    const [feedback, setFeedback] = useState('');
    const [allFeedback, setAllFeedback] = useState([]);

    useEffect(() => {
        const savedFeedback = localStorage.getItem('userFeedback');
        if (savedFeedback) {
            setAllFeedback(JSON.parse(savedFeedback));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!feedback) return;
        const newFeedback = {
            text: feedback,
            date: new Date().toLocaleString()
        };
        const updatedFeedback = [...allFeedback, newFeedback];
        setAllFeedback(updatedFeedback);
        localStorage.setItem('userFeedback', JSON.stringify(updatedFeedback));
        setFeedback(''); // Clear input field
        alert('Feedback submitted!');
    };

    return (
        <div className="container">
            <h1>Follow-ups & Progress Tracking</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="feedback">Log your progress or feelings for today:</label>
                <textarea
                    id="feedback"
                    rows="5"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="e.g., 'Felt very energetic today after following the diet.'"
                ></textarea>
                <button type="submit">Submit Feedback</button>
            </form>

            <div className="card" style={{marginTop: '2rem'}}>
                <h2>Your Feedback History</h2>
                {allFeedback.length > 0 ? (
                    <ul>
                        {allFeedback.map((item, index) => (
                            <li key={index}><strong>{item.date}:</strong> {item.text}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No feedback submitted yet.</p>
                )}
            </div>
        </div>
    );
}

export default FollowUps;
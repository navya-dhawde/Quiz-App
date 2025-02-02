import React from 'react';

const Result = ({ score, total, onRestart }) => {
    return (
        <div className="result-screen">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {total}</p>
            <button onClick={onRestart}>Restart Quiz</button>
        </div>
    );
};

export default Result;

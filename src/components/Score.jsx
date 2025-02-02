import React from 'react';

const Score = ({ score, total }) => {
    return (
        <div className="scoreboard">
            <p>Score: {score} / {total}</p>
        </div>
    );
};

export default Score;

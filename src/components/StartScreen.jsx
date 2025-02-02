import React from 'react';
import './styles.css'; // Import the CSS file

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="box">
        <h1>Welcome <br/> to the  Quiz</h1>
        <button onClick={onStart}>Start Quiz</button>
      </div>
    </div>
  );
};

export default StartScreen;

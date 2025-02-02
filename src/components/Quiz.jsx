import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Score from './Score';

const Quiz = ({ questions, onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer, isCorrect) => {
        setSelectedAnswer({ answer, isCorrect });
        setAnswered(true);
        if (isCorrect) setScore(score + 1);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null); // Reset for next question
            setAnswered(false); // Reset the answered state
        } else {
            setQuizCompleted(true);
            setShowResult(true);
            onFinish(score); // Finish the quiz
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setAnswered(false);
        setQuizCompleted(false);
        setShowResult(false);
        onFinish(null); // Reset the score
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div className="quiz">
                    <div className="question-wrapper">
                        <div className="answers">
                            <span className="question-number">Question {currentIndex + 1}</span>
                            <h2>{questions[currentIndex]?.description || "Loading..."}</h2>
                            <ProgressBar progress={(currentIndex + 1) / questions.length * 100} />
                            <div className="options">
                                {questions[currentIndex]?.options.map((option, i) => {
                                    const isCorrect = option.is_correct;
                                    const isSelected = selectedAnswer?.answer === option.description;
                                    const buttonClass = isSelected
                                        ? isCorrect
                                            ? 'correct'
                                            : 'incorrect'
                                        : '';
    
                                    return (
                                        <button
                                            key={i}
                                            className={`${buttonClass} ${isSelected ? 'selected' : ''}`}
                                            onClick={() => handleAnswer(option.description, isCorrect)}
                                            disabled={answered}
                                        >
                                            <div className={`circle ${isSelected ? 'selected' : ''}`}></div>
                                            {option.description}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <Score score={score} total={questions.length} />
    
                    <button
                        className="next-button"
                        onClick={handleNext}
                        disabled={!answered}
                    >
                        {currentIndex === questions.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            ) : (
                <div className="result-container">
        <h3>Your Final Score: <br/> {score} / {questions.length}</h3>
        <button className="restart-button" onClick={handleRestart}>
            Restart Quiz
        </button>
    </div>
            )}
        </div>
    );    
};

export default Quiz;

import { useState, useEffect } from "react";
import { fetchQuizData } from "./api";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(null); // Set initial score to null for consistency

  useEffect(() => {
    fetchQuizData().then((data) => setQuizData(data));
  }, []);

  return (
    <div className="container">
      {!quizStarted ? (
        <StartScreen onStart={() => setQuizStarted(true)} />
      ) : (
        <Quiz questions={quizData.questions} onFinish={setScore} />
      )}

      {quizStarted && quizData.questions && quizData.questions.length === 0 && (
        <p>Loading questions...</p>
      )}

      {score !== null && score !== undefined && !quizStarted && (
        <Result score={score} />
      )}
    </div>
  );
}

export default App;

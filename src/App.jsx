import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { matchMovies } from "./utils/matchMovies";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [results, setResults] = useState([]);

  function handleFinish(answers) {
    setResults(matchMovies(answers));
    setScreen("result");
  }

  return (
    <div className="app">
      {screen === "start" && <StartScreen onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && <QuestionScreen onFinish={handleFinish} />}
      {screen === "result" && (
        <ResultScreen movies={results} onRestart={() => setScreen("start")} />
      )}
    </div>
  );
}
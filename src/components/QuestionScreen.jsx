import { useState } from "react";

const questions = [
  {
    key: "mood",
    text: "Какое у тебя настроение?",
    options: ["весёлое", "грустное", "напряжённое", "задумчивое", "романтичное"]
  },
  {
    key: "genre",
    text: "Какой жанр предпочитаешь?",
    options: ["комедия", "драма", "фантастика", "боевик", "без разницы"]
  },
  {
    key: "pace",
    text: "Какой темп фильма комфортен?",
    options: ["быстрый", "средний", "медленный"]
  },
  {
    key: "era",
    text: "Что предпочитаешь по эпохе?",
    options: ["новое", "классика", "без разницы"]
  },
  {
    key: "duration",
    text: "Какой по времени фильм хочешь посмотреть?",
    options: ["короткий", "средний", "длинный"]
  },
  {
    key: "depth",
    text: "Что хочешь от фильма?",
    options: ["развлечься", "задуматься"]
  }
];

export default function QuestionScreen({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  function handleAnswer(value) {
    const newAnswers = { ...answers, [questions[index].key]: value };
    setAnswers(newAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      onFinish(newAnswers);
    }
  }

  const q = questions[index];

  return (
    <div className="question-screen">
      <p className="progress">{index + 1} / {questions.length}</p>
      <h2>{q.text}</h2>
      <div className="options">
        {q.options.map(opt => (
          <button key={opt} onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
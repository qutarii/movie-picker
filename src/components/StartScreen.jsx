export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1><span style={{ WebkitTextFillColor: "initial"}}>🎬</span> Кино по настроению</h1>
      <p>Ответь на 6 вопросов — подберём фильм специально для тебя</p>
      <button onClick={onStart}>Начать</button>
    </div>
  );
}
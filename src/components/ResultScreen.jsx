export default function ResultScreen({ movies, onRestart }) {
  return (
    <div className="result-screen">
      <h1>Твои фильмы:</h1>
      <div className="cards">
        {movies.map(m => (
          <div className="card" key={m.title}>
            {/* Добавили картинку */}
            <img src={m.poster} alt={m.title} className="card-poster" />
            
            <div className="card-info">
              <h3>{m.title}</h3>
              <p>{m.description}</p>
              <p className="meta">
                {m.genres.join(", ")} • {m.year} • {m.duration} мин
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onRestart}>Пройти заново</button>
    </div>
  );
}

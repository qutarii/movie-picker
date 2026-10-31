import { movies } from "../data/movies";

export function matchMovies(answers) {
  const scored = movies.map(movie => {
    let score = 0;

    // Настроение (+3 балла)
    if (movie.mood === answers.mood) score += 3;

    // Жанр (+2 балла)
    if (answers.genre !== "без разницы" && movie.genres.includes(answers.genre)) score += 2;
    if (answers.genre === "без разницы") score += 1;

    // Темп (+1 балл)
    if (movie.pace === answers.pace) score += 1;

    // Эпоха (+1 балл)
    if (answers.era === "новое" && movie.year >= 2010) score += 1;
    if (answers.era === "классика" && movie.year < 2000) score += 1;
    if (answers.era === "без разницы") score += 1;

    // Длина (+1 балл) — теперь проверяем реальные числа!
    if (answers.duration === "короткий" && movie.duration < 90) score += 1;
    if (answers.duration === "средний" && movie.duration >= 90 && movie.duration <= 120) score += 1;
    if (answers.duration === "длинный" && movie.duration > 120) score += 1;

    // Глубина (+2 балла)
    if (movie.depth === answers.depth) score += 2;

    return { ...movie, score };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
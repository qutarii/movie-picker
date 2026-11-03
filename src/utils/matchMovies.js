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

    // Эпоха (+1 балл) — берём era из каталога: в нём уже учтены фильмы 2000–2009
    if (answers.era !== "без разницы" && movie.era === answers.era) score += 1;
    if (answers.era === "без разницы") score += 1;

    // Длина (+1 балл) — два варианта: покороче (< 120 мин) и подлиннее (>= 120 мин)
    if (answers.duration === "покороче" && movie.duration < 120) score += 1;
    if (answers.duration === "подлиннее" && movie.duration >= 120) score += 1;

    // Глубина (+2 балла)
    if (movie.depth === answers.depth) score += 2;

    return { ...movie, score };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
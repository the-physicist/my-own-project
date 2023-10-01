// movieService.js - Módulo de serviços relacionados a filmes

import { BASE_URL, API_KEY } from './apiService.js';
import { getData } from './apiService.js';

export async function getMoviesByGenre(genreId, count = 6) {
  const url = `${BASE_URL}/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`;
  const data = await getData(url);
  return data.results.slice(0, count);
}

export async function getPopularMovies(count = 6) {
  const url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=en-US`;
  const data = await getData(url);
  return data.results.slice(0, count);
}

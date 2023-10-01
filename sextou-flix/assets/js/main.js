// main.js - Módulo principal

import { getPopularMovies, getMoviesByGenre } from './modules/movieService.js';
import { showMovies } from './modules/uiService.js';

document.addEventListener('DOMContentLoaded', () => {
  const popularMoviesContainer = document.querySelector('.popular-movies__container');
  const moviesByGenreContainer = document.querySelector('.movies-by-genre__container');
  const genreButtons = document.querySelectorAll('.movies-by-genre__button');
  let defaultGenreId = 99; // Gênero padrão (Documentário)

  genreButtons.forEach((genreButton) => {
    genreButton.addEventListener('click', () => {
      const genreId = genreButton.dataset.value;
      getMoviesByGenre(genreId).then((data) => {
        showMovies(moviesByGenreContainer, data);
      });
    });
  });

  getPopularMovies().then((data) => {
    showMovies(popularMoviesContainer, data);
  });
  getMoviesByGenre(defaultGenreId).then((data) => {
    showMovies(moviesByGenreContainer, data);
  });
});

// uiService.js - Módulo de serviços relacionados à interface do usuário
import { MOVIE_IMAGE_URL } from './apiService.js';

export function createMovieElement(movie) {
  const { title, poster_path } = movie;
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie-container');

  const titleFixed = title.replace(/'/i, '`');

  movieElement.innerHTML = `
    <img class="movie-poster" src="${MOVIE_IMAGE_URL + poster_path}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${titleFixed}</h3>
    </div>
  `;

  return movieElement;
}

export function showMovies(container, data) {
  container.innerHTML = '';

  data.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    container.appendChild(movieElement);
  });
}

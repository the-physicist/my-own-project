// Import from API
import {
  API_KEY,
  BASE_URL,
  POPULAR_MOVIES_URL,
  MOVIES_BY_GENRE_URL,
  MOVIE_IMAGE_URL,
  SEARCH_MOVIE_URL
} from './api.js'

// Global constants for functions
const popularMoviesContainer = document.querySelector('.popular-movies__container')
const moviesByGenreContainer = document.querySelector('.movies-by-genre__container')
const genreButtons = document.querySelectorAll('.movies-by-genre__button')
let defaultGenreId = 99 // Default genre (Documentary)

function createMovieElement(movie) {
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

function showMovies(container, data) {
  container.innerHTML = '';

  data.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    container.appendChild(movieElement);
  });
}

async function fetchData(url, container, count) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed.');
    }
    const data = await response.json();
    showMovies(container, data.results.slice(0, count));
  } catch (error) {
    console.error('Failed to fetch movies:', error);
  }
}

async function getPopularMovies() {
  await fetchData(POPULAR_MOVIES_URL, popularMoviesContainer, 6);
}

async function getMoviesByGenre(genreId) {
  const url = `${BASE_URL}/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`;
  await fetchData(url, moviesByGenreContainer, 6);
}

genreButtons.forEach((genreButton) => {
  genreButton.addEventListener('click', () => {
    const genreId = genreButton.dataset.value;
    getMoviesByGenre(genreId);
  });
});


// Array.prototype.map.call(genreButtons, genreButton =>
//   genreButton.addEventListener('click', function () {
//     getGenreByFilter(genreButton.dataset.value)
//   })
// )

// showMovies(POPULAR_MOVIES_URL, popularMoviesContainer)
// showMovies(MOVIES_BY_GENRE_URL, moviesByGenreContainer)

getPopularMovies()
getMoviesByGenre(defaultGenreId)
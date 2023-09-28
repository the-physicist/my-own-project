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

const popularMoviesContainer = document.querySelector(
  '.popular-movies__container'
)

const moviesByGenreContainer = document.querySelector(
  '.movies-by-genre__container'
)

let genre = 99 // Default genre (Documentary)

function showPopularMovies(data) {
  popularMoviesContainer.innerHTML = ''

  data.forEach(movie => {
    const { title, poster_path, overview } = movie
    const popularMovie = document.createElement('div')
    popularMovie.classList.add('popular-movies__container__items')

    let titleFixed = title.replace(/'/i, '`')

    popularMovie.innerHTML = `
    <img class="movie-poster" src="${MOVIE_IMAGE_URL + poster_path}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${titleFixed}</h3>
    </div>
    `

    popularMoviesContainer.appendChild(popularMovie)
  })
}

function showMoviesByGenre(data) {
  moviesByGenreContainer.innerHTML = ''

  data.forEach(movie => {
    const { title, poster_path } = movie
    const movieByGenre = document.createElement('div')
    movieByGenre.classList.add('movies-by-genre__container__items')

    let titleFixed = title.replace(/'/i, '`')

    movieByGenre.innerHTML = `
    <img class="movie-poster" src="${MOVIE_IMAGE_URL + poster_path}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${titleFixed}</h3>
    </div>
    `

    moviesByGenreContainer.appendChild(movieByGenre)
  })
}

function getPopularMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showPopularMovies(data.results.slice(0, 6))
    })
}

function getMoviesByGenre(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showMoviesByGenre(data.results.slice(0, 6))
    })
}

function getGenreByFilter(genre) {
  const url = `${BASE_URL}/discover/movie?${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${genre}`
  console.log(url)
  return getMoviesByGenre(url)
}

let genreButtons = document.getElementsByClassName('movies-by-genre__button')
console.log(genreButtons)

Array.prototype.map.call(genreButtons, genreButton =>
  genreButton.addEventListener('click', function () {
    console.log(genreButton)
    getGenreByFilter(genreButton.dataset.value)
    console.log(genreButton.dataset.values)
    console.log(genreButton.dataset)
  })
)

getPopularMovies(POPULAR_MOVIES_URL)
getMoviesByGenre(MOVIES_BY_GENRE_URL)
// getGenreByFilter(genre);

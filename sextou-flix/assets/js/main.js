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

let genre = 99 // Default genre (Documentary)

function showMovies(container, data) {
  container.innerHTML = ''

  data.forEach(movie => {
    const { title, poster_path, overview } = movie
    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')

    let titleFixed = title.replace(/'/i, '`')

    movieElement.innerHTML = `
    <img class="movie-poster" src="${MOVIE_IMAGE_URL + poster_path}" alt="" />
    <div class="overview">
      <h3 class="movie-title">${titleFixed}</h3>
    </div>
    `

    container.appendChild(movieElement)
  })
}

async function getMovies(url, container) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(container, data.results.slice(0, 6))
  } catch (error) {
    console.error('Failed to fetch movies:', error)
  }
}

function getGenreByFilter(genre) {
  const url = `${BASE_URL}/discover/movie?${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${genre}`
  return getMovies(url, moviesByGenreContainer)
}

let genreButtons = document.getElementsByClassName('movies-by-genre__button')

Array.prototype.map.call(genreButtons, genreButton =>
  genreButton.addEventListener('click', function () {
    getGenreByFilter(genreButton.dataset.value)
  })
)

getMovies(POPULAR_MOVIES_URL, popularMoviesContainer)
getMovies(MOVIES_BY_GENRE_URL, moviesByGenreContainer)

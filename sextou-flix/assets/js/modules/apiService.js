// apiService.js - Módulo de serviços da API

export const API_KEY = `api_key=11262436c7e323d58750a1a1872c0cc0`;
export const BASE_URL = 'https://api.themoviedb.org/4';
export const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Falha na requisição.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}

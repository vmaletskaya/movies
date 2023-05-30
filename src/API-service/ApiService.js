const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '12697f9651cab9741ad5be8978340838';

export async function fetchTrendingMovies() {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}

export async function fetchById(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}

export async function fetchByQuery (query) {
  return await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}


export async function fetchCredits (id) {
  return await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}

export async function fetchReviews (id) {
  return await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "59c619da17f9f7203e134eac63f3d32c";
export async function fetchWithErrorApi(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrading() {
  return fetchWithErrorApi(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(movieName) {
  return fetchWithErrorApi(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}&page=1&include_adult=false}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorApi(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCast(movieId) {
  return fetchWithErrorApi(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorApi(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

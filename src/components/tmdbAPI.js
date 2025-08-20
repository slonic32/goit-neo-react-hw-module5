import axios from "axios";

const MOVIEKEY = "api_key=a76360bdbcb3afa8307ed004edbb3d8c";
const MOVIELANGUAGE = "language=en-US";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

async function getTrandingMovies() {
  const trandingMovies = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?${MOVIELANGUAGE}&${MOVIEKEY}`
  );
  return trandingMovies.data.results;
}

async function getMovieDetails(id) {
  const movieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${MOVIELANGUAGE}&${MOVIEKEY}`
  );
  return movieDetails.data;
}

function getPosterURL(poster) {
  return poster
    ? `https://image.tmdb.org/t/p/w342${poster}?${MOVIELANGUAGE}&${MOVIEKEY}`
    : defaultImg;
}

async function getMovieCredits(id) {
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?${MOVIELANGUAGE}&${MOVIEKEY}`
  );
  return credits.data.cast;
}

function getProfileURL(profile) {
  return profile
    ? `https://image.tmdb.org/t/p/w185${profile}?${MOVIELANGUAGE}&${MOVIEKEY}`
    : defaultImg;
}

async function getMovieReviews(id) {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${MOVIELANGUAGE}&${MOVIEKEY}&page=1'`
  );
  return reviews.data.results;
}

async function getMovies(filter) {
  const movies = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${filter}&${MOVIELANGUAGE}&${MOVIEKEY}&page=1`
  );
  return movies.data.results;
}

export {
  getTrandingMovies,
  getMovieDetails,
  getPosterURL,
  getMovieCredits,
  getProfileURL,
  getMovieReviews,
  getMovies,
};

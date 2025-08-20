import css from "./MovieDetails.module.css";
import { getPosterURL } from "../tmdbAPI";
import { Link } from "react-router-dom";

export default function MovieDetails({ movieDetails }) {
  function printGenres(movieGenres) {
    const genres = [];
    movieGenres.map(item => genres.push(item.name));
    return genres.join(" ");
  }

  return (
    <>
      <div className={css.movieDetails}>
        <img
          src={getPosterURL(movieDetails.poster_path)}
          alt={movieDetails.titel}
        />
        <div>
          <h1 className={css.marginBottom}>
            {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
          </h1>
          <p className={css.marginBottom}>
            User Score: {Math.round(movieDetails.vote_average * 10)}%
          </p>
          <h2 className={css.marginBottom}>Overview</h2>
          <p className={css.marginBottom}>{movieDetails.overview}</p>
          <h3 className={css.marginBottom}>Genres</h3>
          <p>{printGenres(movieDetails.genres)}</p>
        </div>
      </div>
      <hr className={css.line} />
      <nav className={css.navblock}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <hr className={css.line} />
    </>
  );
}

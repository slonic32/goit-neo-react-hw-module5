import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movieList }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movieList.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

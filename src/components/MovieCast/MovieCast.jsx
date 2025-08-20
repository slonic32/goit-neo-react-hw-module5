import css from "./MovieCast.module.css";
import { getMovieCredits } from "../tmdbAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Actor from "../Actor/Actor";

export default function MovieCast({ toggleLoading, toggleError }) {
  // const [loaded, setLoaded] = useState(false);
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCredits() {
      toggleError(false);
      toggleLoading(true);
      try {
        const credits = await getMovieCredits(movieId);
        setMovieCredits(credits);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    fetchMovieCredits();
  }, [toggleLoading, toggleError, movieId]);

  return (
    <ul>
      {movieCredits.map((item) => {
        return (
          <li key={item.credit_id} className={css.listItem}>
            <Actor actor={item} />
          </li>
        );
      })}
    </ul>
  );
}

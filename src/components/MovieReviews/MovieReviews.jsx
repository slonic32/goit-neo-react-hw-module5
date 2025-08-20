import css from "./MovieReviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../Review/Review";
import { getMovieReviews } from "../tmdbAPI.js";

export default function MovieReviews({ toggleLoading, toggleError }) {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      toggleError(false);
      toggleLoading(true);
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    fetchMovieReviews();
  }, [toggleLoading, toggleError, movieId]);

  return (
    <>
      {movieReviews.length ? (
        <ul>
          {movieReviews.map((item) => {
            return (
              <li key={item.id} className={css.listItem}>
                <Review review={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}

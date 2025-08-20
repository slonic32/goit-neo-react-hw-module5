import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { getTrandingMovies } from "../../components/tmdbAPI";
import { useState, useEffect } from "react";

export default function HomePage({ toggleLoading, toggleError }) {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      toggleError(false);
      toggleLoading(true);
      try {
        const movies = await getTrandingMovies();
        setTrandingMovies(movies);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    fetchMovies();
  }, [toggleLoading, toggleError]);

  return (
    <>
      <h1 className={css.header}>Tranding today</h1>
      <MovieList movieList={trandingMovies} />
    </>
  );
}

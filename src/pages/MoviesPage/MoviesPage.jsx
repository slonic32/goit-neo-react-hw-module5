import SearchMovie from "../../components/SearchMovie/SearchMovie";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { getMovies } from "../../components/tmdbAPI";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage({ toggleLoading, toggleError }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function searchMovies(filter) {
      toggleError(false);
      toggleLoading(true);
      try {
        const movies = await getMovies(filter);
        setSearchResult(movies);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    const filter = searchParams.get("query");
    if (filter !== null) {
      searchMovies(filter);
    }
  }, [searchParams, toggleError, toggleLoading]);

  return (
    <>
      <SearchMovie handleSubmit={setSearchParams} />
      <MovieList movieList={searchResult} />
    </>
  );
}

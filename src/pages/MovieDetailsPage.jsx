import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieDetails } from "../components/tmdbAPI";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import GoBack from "../components/GoBack/GoBack";

export default function MovieDetailsPage({ toggleLoading, toggleError }) {
  const [movieDetails, setMovieDetails] = useState(undefined);
  const { movieId } = useParams();
  const [previousPage, setPreviousPage] = useState(null);
  const location = useLocation();
  if (location.state) {
    if (previousPage !== location.state.from) {
      setPreviousPage(location.state.from);
    }
  }

  const goToURL = useNavigate();
  function goBack() {
    goToURL(previousPage);
  }

  useEffect(() => {
    async function fetchMoviesDetails() {
      toggleError(false);
      toggleLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    fetchMoviesDetails();
  }, [toggleLoading, toggleError, movieId]);

  return (
    <>
      {previousPage && <GoBack handleClick={goBack} />}
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

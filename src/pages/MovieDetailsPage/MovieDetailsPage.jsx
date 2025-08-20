import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, Suspense, useRef } from "react";
import { getMovieDetails } from "../../components/tmdbAPI";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import GoBack from "../../components/GoBack/GoBack";

export default function MovieDetailsPage({ toggleLoading, toggleError }) {
  const [movieDetails, setMovieDetails] = useState(undefined);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state ? location.state.from : "/movies");

  const goToURL = useNavigate();
  function goBack() {
    goToURL(backLink.current);
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
      {<GoBack handleClick={goBack} />}
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

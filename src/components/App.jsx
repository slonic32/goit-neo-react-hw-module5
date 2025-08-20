import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout.jsx";
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));

const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
import Loader from "./Loader/Loader.jsx";
import Error from "./Error/Error.jsx";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <HomePage toggleLoading={setLoading} toggleError={setError} />
              }
            />
            <Route
              path="/movies"
              element={
                <MoviesPage toggleLoading={setLoading} toggleError={setError} />
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <MovieDetailsPage
                  toggleLoading={setLoading}
                  toggleError={setError}
                />
              }
            >
              <Route
                path="cast"
                element={
                  <MovieCast
                    toggleLoading={setLoading}
                    toggleError={setError}
                  />
                }
              />
              <Route
                path="reviews"
                element={
                  <MovieReviews
                    toggleLoading={setLoading}
                    toggleError={setError}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
}

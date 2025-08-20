import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
const HomePage = lazy(() => import("../pages/HomePage.jsx"));

const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../pages/NotFound"));
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
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

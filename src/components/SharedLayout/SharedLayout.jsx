import css from "./SharedLayout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout() {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <nav>
            <NavLink to="/" className={css.headerLink}>
              Home
            </NavLink>
            <NavLink to="/movies" className={css.headerLink}>
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}

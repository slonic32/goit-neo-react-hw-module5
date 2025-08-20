import css from "./Actor.module.css";
import { getProfileURL } from "../tmdbAPI";

export default function Actor({ actor }) {
  return (
    <>
      {actor.profile_path && (
        <img
          src={getProfileURL(actor.profile_path)}
          alt={actor.name}
          className={css.image}
        />
      )}
      <p className={css.actor}>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </>
  );
}

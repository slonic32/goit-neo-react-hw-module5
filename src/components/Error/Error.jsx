import css from "./Error.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
}

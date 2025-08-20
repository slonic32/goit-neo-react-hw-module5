import css from "./SearchMovie.module.css";

export default function SearchMovie({ handleSubmit }) {
  function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const filter = form.elements.filter.value;
    handleSubmit({ query: filter.trim() });
    form.reset();
  }

  return (
    <form onSubmit={formSubmit} className={css.searchForm}>
      <input type="text" name="filter" className={css.filter} />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}

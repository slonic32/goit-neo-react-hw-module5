import css from "./Review.module.css";

export default function Review({ review }) {
  return (
    <>
      <h3 className={css.header}>Author: {review.author}</h3>
      <p>{review.content}</p>
    </>
  );
}

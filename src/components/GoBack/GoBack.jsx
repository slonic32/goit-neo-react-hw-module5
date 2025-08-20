import css from "./GoBack.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function GoBack({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={css.goback}>
      <IoIosArrowRoundBack className={css.arrow} />
      Go back
    </button>
  );
}

import clsx from "clsx";
import css from "../Description/Description.module.css";
function Description() {
  return (
    <>
      <h2 className={clsx(css.title)}>Sip Happens Café</h2>
      <p className={clsx(css.description)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}

export default Description;

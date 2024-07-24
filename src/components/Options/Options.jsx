import clsx from "clsx";
import css from "../Options/Options.module.css";

function Options() {
  return (
    <div className={clsx(css.olist)}>
      <button className={clsx(css.btn)}>Good</button>
      <button className={clsx(css.btn)}>Neutral</button>
      <button className={clsx(css.btn)}>Bad</button>
      <button className={clsx(css.btn)}>Reset</button>
    </div>
  );
}

export default Options;

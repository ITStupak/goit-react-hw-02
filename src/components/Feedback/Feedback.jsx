import clsx from "clsx";
import css from "../Feedback/Feedback.module.css";
function Feedback() {
  return (
    <ul className={clsx(css.flist)}>
      <li className={clsx(css.fitem)}>Good:</li>
      <li className={clsx(css.fitem)}>Neutral:</li>
      <li className={clsx(css.fitem)}>Bad:</li>
      <li className={clsx(css.fitem)}>Total:</li>
      <li className={clsx(css.fitem)}>Positive:</li>
    </ul>
  );
}

export default Feedback;

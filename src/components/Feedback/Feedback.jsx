import css from "../Feedback/Feedback.module.css";

export default function Feedback({ good, netural, bad, total, positive }) {
  return (
    <ul className={css.flist}>
      <li className={css.fitem}>Good: {good}</li>
      <li className={css.fitem}>Netural: {netural}</li>
      <li className={css.fitem}>Bad: {bad}</li>
      <li className={css.fitem}>Total: {total}</li>
      <li className={css.fitem}>Positive: {positive}%</li>
    </ul>
  );
}

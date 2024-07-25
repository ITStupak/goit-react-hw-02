import css from "../Options/Options.module.css";

export default function Options({ onFeedbackAdd, onFeedbackReset, total }) {
  return (
    <div className={css.olist}>
      <button
        type="button"
        onClick={() => {
          onFeedbackAdd("good");
        }}
        className={css.btn}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onFeedbackAdd("netural");
        }}
        className={css.btn}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onFeedbackAdd("bad");
        }}
        className={css.btn}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          type="button"
          name="reset"
          onClick={onFeedbackReset}
          className={css.btn}
        >
          Reset
        </button>
      )}
    </div>
  );
}

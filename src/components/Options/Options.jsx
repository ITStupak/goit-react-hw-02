import css from "../Options/Options.module.css";

export default function Options({ updateFeedback, onFeedbackReset, total }) {
  return (
    <div className={css.olist}>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
        className={css.btn}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={css.btn}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
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

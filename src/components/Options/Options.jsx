import css from "../Options/Options.module.css";

export default function Options({ updateFeedback, onFeedbackReset, total }) {
  return (
    <div className={css.olist}>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
        className={[css.btn, css.good].join(" ")}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={[css.btn, css.neutral].join(" ")}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
        className={[css.btn, css.bad].join(" ")}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          type="button"
          onClick={onFeedbackReset}
          className={[css.btn, css.reset].join(" ")}
        >
          Reset
        </button>
      )}
    </div>
  );
}

import css from "../Notification/Notification.module.css";

export default function Notification() {
  return (
    <p className={css.notification /* css["is-active"] */}>No feedback yet</p>
  );
}

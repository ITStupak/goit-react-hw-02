import clsx from "clsx";
import css from "../Notification/Notification.module.css";

function Notification() {
  return (
    <p className={clsx(css.notification /* css["is-active"] */)}>
      No feedback yet
    </p>
  );
}

export default Notification;

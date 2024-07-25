import { useState } from "react";
import "./App.css";
import "./index.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    netural: 0,
    bad: 0,
  });

  const onFeedbackAdd = (feedbackType) => {
    // console.log("click", feedbackType);
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onFeedbackReset = () => {
    setFeedback({ good: 0, netural: 0, bad: 0 });
  };

  const total = feedback.good + feedback.netural + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);

  return (
    <>
      <Description />
      <Options
        onFeedbackAdd={onFeedbackAdd}
        onFeedbackReset={onFeedbackReset}
        total={total}
      />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          netural={feedback.netural}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

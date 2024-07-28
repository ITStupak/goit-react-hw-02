import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedbackValue");
    return JSON.parse(savedFeedback) ?? { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  const onFeedbackAdd = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onFeedbackReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
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
          neutral={feedback.neutral}
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

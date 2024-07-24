import { useState } from "react";
import "./App.css";
import "./index.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    netural: 0,
    bad: 0,
  });
  const handleClick = () => {
    setFeedback(feedback + 1);
  };
  const totalFeedback = feedback[0] + feedback[1] + feedback[2];

  return (
    <>
      <Description />
      <Options onClick={handleClick} />
      {totalFeedback > 0 ? <Feedback /> : <Notification />}
    </>
  );
}

export default App;

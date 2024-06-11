import { useState } from "react";
import  Feedback  from '../Feedback/Feedback'
import  Options  from '../Options/Options'

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options onLeaveFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

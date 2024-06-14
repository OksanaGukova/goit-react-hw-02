import { useState } from "react";
import  Feedback  from '../Feedback/Feedback'
import Options from '../Options/Options'
import css from './App.module.css'
import Notification from "../Notification/Notification";


 function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
   };

    const resetFeedback = () => {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    };
   
    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h1 className={css.header}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}



export default App
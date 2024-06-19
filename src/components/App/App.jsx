import { useEffect, useState } from "react";
import  Feedback  from '../Feedback/Feedback'
import Options from '../Options/Options'
import Descriptions from "../Descriptions/Descriptions";
import Notification from "../Notification/Notification";


function App() {

 const [feedback, setFeedback] = useState(() => {
   const savedFeedback = localStorage.getItem("feedback");
   return savedFeedback
     ? JSON.parse(savedFeedback)
     : { good: 0, neutral: 0, bad: 0 };
 });

   useEffect(() => {
     localStorage.setItem("feedback", JSON.stringify(feedback));
   }, [feedback]);

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
    const positiveFeedback = Math.round((good / totalFeedback) * 100);
  
  return (
    <>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback} 
        />
      ) : (
        <Notification />
      )}
    </>
  );
}


export default App
import css from './Feedback.module.css'

export default function Feedback({ feedback, positiveFeedback }) {
  
    return (
      <div className={css.container}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    );
}


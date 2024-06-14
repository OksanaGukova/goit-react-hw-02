import css from './Feedback.modyle.css'

export default function Feedback({ feedback }) {
    return (
      <div className={css.container}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </div>
    );
}


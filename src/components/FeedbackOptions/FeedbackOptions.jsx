import style from './Feedback.Options.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style['options-list']}>
      {options.map((option, ind) => {
        return (
          <li key={ind}>
            <button
              className={style.feedback_butt}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;

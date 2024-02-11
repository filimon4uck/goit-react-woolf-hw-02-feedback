import style from './Statistic.module.css';
const Statistics = ({ entries, total, positivePercentage }) => {
  return (
    <div className={style.statistic_field}>
      <ul className={style.stat_list}>
        {Object.entries(entries).map((entry, ind) => {
          return (
            <li className={style.item} key={ind}>
              {entry[0]} : {entry[1]}
            </li>
          );
        })}
      </ul>
      <div className={style.summ}>
        <span>Total: {total}</span>
        <span>Positive feedbacks: {positivePercentage}%</span>
      </div>
    </div>
  );
};

export default Statistics;

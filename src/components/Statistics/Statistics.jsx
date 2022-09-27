import { StylesStatistics } from 'components/Statistics/StylesStatistics';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <StylesStatistics>
      <p>
        Good<span className="area">{good}</span>
      </p>
      <p>
        Neutral<span className="area">{neutral}</span>
      </p>
      <p>
        Bad<span className="area">{bad}</span>
      </p>
      <p>
        Total<span className="area">{total}</span>
      </p>
      <p>
        Positive feedback<span className="area">{positive}</span>
        <span className="percent">%</span>
      </p>
    </StylesStatistics>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positive: PropTypes.number.isRequired,
  }),
};

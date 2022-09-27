import { StylesFeedbackOptions } from 'components/FeedbackOptions/StylesFeedbackOptions';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClickButton, options }) => {
  return (
    <StylesFeedbackOptions>
      {options.map((item, index )=> (
        <button className="button" key={index} name={item} onClick={onClickButton} type="button">{item}</button>
      ) )}
    </StylesFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

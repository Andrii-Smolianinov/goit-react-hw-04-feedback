import { useState } from 'react';
import { StylesFeedback } from 'components/Feedback/StylesFeedback';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

const Feedback = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onCountFeedback = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGoodFeedback(prevState => {
          return prevState + 1;
        });
        break;
      case 'neutral':
        setNeutralFeedback(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setBadFeedback(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return 0;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const totalRates = countTotalFeedback();

    return good > 0 ? Math.round((good / totalRates) * 100) : 0;
  };
  const totalRates = countTotalFeedback();
  return (
    <StylesFeedback>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClickButton={onCountFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>

      <Section title="Statistics">
        {totalRates > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StylesFeedback>
  );
};
export default Feedback;

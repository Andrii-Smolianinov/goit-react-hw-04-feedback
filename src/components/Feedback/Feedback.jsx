import { Component } from 'react';
import { StylesFeedback } from 'components/Feedback/StylesFeedback';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCountFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedback = () =>
    this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    const names = Object.keys(this.state);

    return (
      <StylesFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickButton={this.onCountFeedback}
            options={names}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StylesFeedback>
    );
  }
}

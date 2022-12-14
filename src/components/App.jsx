import { useMemo } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const positiveFeedback = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  }, [total, good]);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good': {
        setGood(good + 1);
        break;
      }
      case 'Neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'Bad': {
        setBad(bad + 1);
        break;
      }
      default: {
      }
    }
  };

  return (
    <div>
      <h1> cafe "Expresso" </h1>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      </Section>
    </div>
  );
};

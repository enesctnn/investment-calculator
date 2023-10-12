import { useState } from 'react';
import ActionButtons from './ActionButtons/ActionButtons';
import styles from './InvesmentForm.module.css';

const InvestForm = ({ onSubmit, onReset }) => {
  const [currentSavings, setCurrentSavings] = useState(+1000);
  const [yearlySavings, setYearlySavings] = useState(+1200);
  const [expectedReturn, setExpectedReturn] = useState(+100);
  const [duration, setDuration] = useState(+7);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'currentSave') setCurrentSavings(+value);
    else if (identifier === 'yearlySave') setYearlySavings(+value);
    else if (identifier === 'expectedReturn') setExpectedReturn(+value);
    else if (identifier === 'duration') setDuration(+value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const invesmentData = {
      currentSavings: +currentSavings,
      yearlyContribution: +yearlySavings,
      expectedReturn: +expectedReturn,
      duration: +duration,
    };
    onSubmit(invesmentData);

    setCurrentSavings('');
    setYearlySavings('');
    setExpectedReturn('');
    setDuration('');
  };
  const resetButtonHandler = () => {
    setCurrentSavings(+1000);
    setYearlySavings(+1200);
    setExpectedReturn(+100);
    setDuration(+7);
    onReset();
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(props) => {
              inputChangeHandler('currentSave', props.target.value);
            }}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(props) => {
              inputChangeHandler('yearlySave', props.target.value);
            }}
            value={yearlySavings}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            max="100"
            onChange={(props) => {
              inputChangeHandler('expectedReturn', props.target.value);
            }}
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(props) => {
              inputChangeHandler('duration', props.target.value);
            }}
            value={duration}
          />
        </p>
      </div>
      <ActionButtons onReset={resetButtonHandler} />
    </form>
  );
};

export default InvestForm;

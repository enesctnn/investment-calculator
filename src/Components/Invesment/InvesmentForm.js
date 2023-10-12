import { useState } from 'react';
import ActionButtons from './ActionButtons/ActionButtons';
import styles from './InvesmentForm.module.css';

const InvestForm = () => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'currentSave') setCurrentSavings(+value);
    else if (identifier === 'yearlySave') setYearlySavings(+value);
    else if (identifier === 'expectedReturn') setExpectedReturn(+value);
    else if (identifier === 'duration') setDuration(+value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const invesmentData ={

    }
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
            onChange={(props) => {
              inputChangeHandler('expectedReturn', props.target.value);
            }}
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
          />
        </p>
      </div>
      <ActionButtons />
    </form>
  );
};

export default InvestForm;

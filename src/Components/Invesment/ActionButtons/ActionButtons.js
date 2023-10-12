import styles from './ActionButtons.module.css';

const ActionButtons = ({ onReset }) => {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt} onClick={onReset}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default ActionButtons;

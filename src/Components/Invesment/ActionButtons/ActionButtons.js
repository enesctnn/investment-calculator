import styles from './ActionButtons.module.css';

const ActionButtons = () => {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default ActionButtons;

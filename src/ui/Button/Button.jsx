import styles from './Button.module.scss';

const Button = ({ children }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button type="button" className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;

import styles from './Benefits.module.scss';

const Benefits = () => {
  return (
    <ul className={styles.benefits}>
      <li className={styles.item}>
        <p className={styles.text}>мы</p>
        <span className={`${styles.text} ${styles.accent}`}>1</span>
        <p className={styles.text}>на рынке</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>гарантируем</p>
        <span className={`${styles.text} ${styles.accent}`}>50%</span>
        <p className={styles.text}>безопасность</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>календарик за</p>
        <span className={`${styles.text} ${styles.accent}`}>
          2001<span className={styles.text}>г.</span>
        </span>
        <p className={styles.text}>в подарок</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>путешествие</p>
        <span className={`${styles.text} ${styles.accent}`}>597</span>
        <p className={styles.text}>дней</p>
      </li>
    </ul>
  );
};

export default Benefits;

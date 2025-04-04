import styles from './Title.module.scss';

const Title = () => {
  return (
    <h1 className={styles.title}>
      <span className={`${styles.text} ${styles.firstString}`}>
        Путешествие
      </span>
      <span className={`${styles.text} ${styles.secondString}`}>
        на красную планету
      </span>
    </h1>
  );
};

export default Title;

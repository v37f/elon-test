import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { MAIN_PAGE_ROUTE } from '../../../../utils/constants';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            Технология
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            График полетов
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            Гарантии
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            О компании
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

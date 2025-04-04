import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from 'src/assets/image/Logo-SpaceX.png';
import { MAIN_PAGE_ROUTE } from '../../utils/constants';

const Logo = () => {
  return (
    <Link to={MAIN_PAGE_ROUTE} className={styles.logo} tabIndex={-1}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.image} />
      </div>
    </Link>
  );
};

export default Logo;

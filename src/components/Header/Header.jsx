import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

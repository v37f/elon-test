import { useEffect, useState } from 'react';
import useScreenWidth from '../../../hooks/useScreenWidth';
import styles from './NavBar.module.scss';
import Navigation from './Navigation/Navigation';

const maxTableWidth = 767;

const NavBar = () => {
  const screenWidth = useScreenWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      setTimeout(() => {
        window.addEventListener('click', closeMenu);
      });
    }
    return () => window.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    if (screenWidth > maxTableWidth) {
      setIsMenuOpen(false);
    }
  }, [screenWidth]);
  return (
    <div className={styles.navBar}>
      {screenWidth > maxTableWidth ? (
        <Navigation />
      ) : (
        <button
          className={`${styles.button} ${isMenuOpen ? styles.close : ''}`}
          onClick={toggleMenu}
          type="button"
        >
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </button>
      )}
      {isMenuOpen && <Navigation />}
    </div>
  );
};

export default NavBar;

import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : ''}`}>
      <h1 className={styles.title}>Book Finder</h1>
    </header>
  );
};

export default Header;
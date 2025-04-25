import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.toggle} ${isDark ? styles.dark : ''}`}
      onClick={toggleTheme}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
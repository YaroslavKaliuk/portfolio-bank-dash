'use client';

import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export interface ThemeSwitcherProps {
  isAside?: boolean;
  isHeader?: boolean;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ isAside, isHeader }) => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') === 'dark';
    setDark(theme);
    document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');
    setMounted(true);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue === 'dark';
        setDark(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      className={cn(
        styles.themeSwitcher,
        isAside && styles.themeSwitcher__isAside,
        isHeader && styles.themeSwitcher__isHeader,
      )}
      onClick={toggleTheme}
    >
      {dark ? <Icons.IconMoon /> : <Icons.IconSun />}
    </button>
  );
};

'use client';

import cn from 'classnames';
import styles from './styles.module.scss';

export const NavToggle = () => {
  return (
    <label className={cn(styles.navToggle)}>
      <input type="checkbox" name="navToggle" hidden />
      <span className={styles.navToggle__lines}></span>
    </label>
  );
};

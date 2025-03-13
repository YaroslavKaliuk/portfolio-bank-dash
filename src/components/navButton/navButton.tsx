'use client';

import cn from 'classnames';
import styles from './styles.module.scss';

export const NavButton = () => {
  return (
    <label className={cn(styles.navButton)}>
      <input type="checkbox" name="navButton" hidden />
      <span className={styles.navButton__lines}></span>
    </label>
  );
};

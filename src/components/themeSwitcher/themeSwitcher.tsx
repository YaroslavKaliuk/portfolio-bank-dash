'use client';

import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export interface ThemeSwitcherProps {
  isAside?: boolean;
  isHeader?: boolean;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ isAside, isHeader }) => {
  const [dark, setDark] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        styles.themeSwitcher,
        isAside && styles.themeSwitcher__isAside,
        isHeader && styles.themeSwitcher__isHeader,
      )}
      onClick={() => setDark(!dark)}
    >
      {dark ? <Icons.IconMoon /> : <Icons.IconSun />}
    </button>
  );
};

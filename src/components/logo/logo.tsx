'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export const Logo = () => {
  return (
    <div className={cn(styles.logo)}>
      <Icons.IconLogo />
    </div>
  );
};

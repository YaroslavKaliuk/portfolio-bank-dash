'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={cn(styles.header)}>
      <div className={styles.header__container}>{children}</div>
    </header>
  );
};

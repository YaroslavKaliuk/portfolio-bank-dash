'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface MainProps {
  children?: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className={cn(styles.main)}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
};

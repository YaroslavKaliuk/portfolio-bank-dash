'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface AsideProps {
  children?: ReactNode;
}

export const Aside: FC<AsideProps> = ({ children }) => {
  return (
    <aside className={cn(styles.aside)}>
      <div className={styles.aside__container}>{children}</div>
    </aside>
  );
};

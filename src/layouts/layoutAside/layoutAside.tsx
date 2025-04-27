'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutAsideProps {
  children?: ReactNode;
}

export const LayoutAside: FC<LayoutAsideProps> = ({ children }) => {
  return (
    <aside className={cn(styles.layoutAside)}>
      <input type="checkbox" name="navToggle" hidden />
      <div className={styles.layoutAside__container}>{children}</div>
    </aside>
  );
};

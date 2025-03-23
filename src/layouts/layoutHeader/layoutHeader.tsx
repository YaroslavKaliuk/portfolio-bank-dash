'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutHeaderProps {
  children?: ReactNode;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ children }) => {
  return (
    <header className={cn(styles.layoutHeader)}>
      <div className={styles.layoutHeader__container}>{children}</div>
    </header>
  );
};

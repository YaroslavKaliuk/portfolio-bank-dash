'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutFooterProps {
  children?: ReactNode;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({ children }) => {
  return (
    <footer className={cn(styles.layoutFooter)}>
      <div className={styles.layoutFooter__container}>{children}</div>
    </footer>
  );
};

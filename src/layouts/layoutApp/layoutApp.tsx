'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutAppProps {
  children?: ReactNode;
}

export const LayoutApp: FC<LayoutAppProps> = ({ children }) => {
  return <div className={cn(styles.layoutApp)}>{children}</div>;
};

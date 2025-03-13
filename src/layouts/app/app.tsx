'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface AppProps {
  children?: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => {
  return <div className={cn(styles.app)}>{children}</div>;
};

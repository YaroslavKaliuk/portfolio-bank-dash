'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export interface GraphProps {
  children: React.ReactNode;
}

export const Graph: FC<GraphProps> = ({ children }) => {
  return <div className={cn(styles.graph)}>{children}</div>;
};

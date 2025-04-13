'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export interface LoaderProps {}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className={cn(styles.loader)}>
      <div className={styles.loader__inner}></div>
    </div>
  );
};

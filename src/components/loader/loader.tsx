'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export const Loader: FC = () => {
  return (
    <div className={cn(styles.loader)}>
      <div className={styles.loader__inner}></div>
    </div>
  );
};

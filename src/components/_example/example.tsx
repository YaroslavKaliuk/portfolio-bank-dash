'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export interface ExampleProps {
  example?: boolean;
}

export const Example: FC<ExampleProps> = () => {
  return <div className={cn(styles.example)}></div>;
};

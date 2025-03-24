'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  return <h3 className={cn(styles.title)}>{title}</h3>;
};

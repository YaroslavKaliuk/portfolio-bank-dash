'use client';

import cn from 'classnames';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

export interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  const t = useTranslations('titles');
  return <h3 className={cn(styles.title)}>{t(title)}</h3>;
};

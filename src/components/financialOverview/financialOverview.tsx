'use client';

import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface FinancialOverviewItem {
  icon?: ReactNode;
  title?: string;
  value?: string;
}

export interface FinancialOverviewProps {
  items: FinancialOverviewItem[];
}

export const FinancialOverview: FC<FinancialOverviewProps> = ({ items }) => {
  return (
    <div className={cn(styles.financialOverview)}>
      {items.map((item, index) => (
        <div key={index} className={styles.financialOverview__item}>
          {item.icon && <div className={styles.financialOverview__icon}>{item.icon}</div>}
          {item.title && <div className={styles.financialOverview__title}>{item.title}</div>}
          {item.value && <div className={styles.financialOverview__value}>{item.value}</div>}
        </div>
      ))}
    </div>
  );
};

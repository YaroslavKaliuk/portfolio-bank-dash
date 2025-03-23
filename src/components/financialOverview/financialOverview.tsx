'use client';

import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface FinancialOverviewProps {
  icon?: ReactNode;
  title?: string;
  value?: string;
}

export const FinancialOverview: FC<FinancialOverviewProps> = ({ icon, title, value }) => {
  return (
    <div className={cn(styles.financialOverview)}>
      {icon && <div className={styles.financialOverview__icon}>{icon}</div>}
      {title && <div className={styles.financialOverview__title}>{title}</div>}
      {value && <div className={styles.financialOverview__value}>{value}</div>}
    </div>
  );
};

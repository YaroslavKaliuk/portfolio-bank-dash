'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutRowProps {
  children?: ReactNode;
  isGridColumnFull?: boolean;
  isFinancialOverview?: boolean;
  isChartExpenseStatistics?: boolean;
}

export const LayoutRow: FC<LayoutRowProps> = ({
  children,
  isFinancialOverview,
  isGridColumnFull,
  isChartExpenseStatistics,
}) => {
  return (
    <div
      className={cn(
        styles.layoutRow,
        isGridColumnFull && styles.layoutRow__isGridColumnFull,
        isFinancialOverview && styles.layoutRow__isFinancialOverview,
        isChartExpenseStatistics && styles.layoutRow__isChartExpenseStatistics,
      )}
    >
      {children}
    </div>
  );
};

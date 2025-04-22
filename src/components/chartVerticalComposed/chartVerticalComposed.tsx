'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface VerticalChartData {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}

export interface ChartVerticalComposedProps {
  data?: VerticalChartData[];
  height?: number;
  showLegend?: boolean;
  gridColor?: string;
  legendIncomeText?: string;
  legendExpensesText?: string;
  legendSavingsText?: string;
  currencySymbol?: string;
}

export const ChartVerticalComposed: FC<ChartVerticalComposedProps> = ({
  data,
  height = 600,
  showLegend = true,
  gridColor = 'var(--color-base-light-blue)',
  legendIncomeText,
  legendExpensesText,
  legendSavingsText,
  currencySymbol = '$',
}) => {
  const formatValue = (value: number) => {
    return `${currencySymbol}${value.toLocaleString()}`;
  };

  return (
    <div className={cn(styles.chartVerticalComposed)}>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            type="number"
            stroke="var(--color-primary-light)"
            tick={{ fill: 'var(--color-primary-light)' }}
            tickFormatter={formatValue}
          />
          <YAxis
            dataKey="month"
            type="category"
            scale="band"
            stroke="var(--color-primary-light)"
            tick={{ fill: 'var(--color-primary-light)' }}
          />
          <Tooltip
            cursor={{ fill: 'var(--color-base-light-blue)' }}
            contentStyle={{
              border: 'none',
              boxShadow: 'var(--box-shadow-primary)',
              borderRadius: 'var(--border-radius-small)',
              backgroundColor: 'var(--color-base-white)',
            }}
            labelStyle={{ color: 'var(--color-text-secondary)' }}
            itemStyle={{ color: 'var(--color-text-primary)' }}
            formatter={(value: number) => formatValue(value)}
          />
          {showLegend && <Legend iconType="circle" />}

          <Bar
            dataKey="income"
            fill="var(--color-accent-teal)"
            name={legendIncomeText}
            radius={[0, 8, 8, 0]}
          />
          <Bar
            dataKey="expenses"
            fill="var(--color-accent-pink)"
            name={legendExpensesText}
            radius={[0, 8, 8, 0]}
          />
          <Line
            dataKey="savings"
            stroke="var(--color-primary)"
            name={legendSavingsText}
            dot={{ fill: 'var(--color-primary)', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

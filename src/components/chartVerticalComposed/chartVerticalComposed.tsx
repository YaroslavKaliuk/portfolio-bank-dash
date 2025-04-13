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
  gridColor = 'var(--base-light-blue)',
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
            stroke="var(--primary-light)"
            tick={{ fill: 'var(--primary-light)' }}
            tickFormatter={formatValue}
          />
          <YAxis
            dataKey="month"
            type="category"
            scale="band"
            stroke="var(--primary-light)"
            tick={{ fill: 'var(--primary-light)' }}
          />
          <Tooltip
            cursor={{ fill: 'var(--base-light-blue)' }}
            contentStyle={{
              border: 'none',
              boxShadow: 'var(--box-shadow-primary)',
              borderRadius: 'var(--border-radius-small)',
              backgroundColor: 'var(--base-white)',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={(value: number) => formatValue(value)}
          />
          {showLegend && <Legend iconType="circle" />}

          <Bar
            dataKey="income"
            fill="var(--accent-teal)"
            name={legendIncomeText}
            radius={[0, 8, 8, 0]}
          />
          <Bar
            dataKey="expenses"
            fill="var(--accent-pink)"
            name={legendExpensesText}
            radius={[0, 8, 8, 0]}
          />
          <Line
            dataKey="savings"
            stroke="var(--primary)"
            name={legendSavingsText}
            dot={{ fill: 'var(--primary)', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

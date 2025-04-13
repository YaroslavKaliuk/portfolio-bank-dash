'use client';

import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './styles.module.scss';

export type ChartType = 'single' | 'double' | 'triangle' | 'composed';

export interface ChartData {
  name: string;
  value?: number;
  value1?: number;
  value2?: number;
  income?: number;
  expenses?: number;
}

export interface ChartSummary {
  name: string;
  value: string;
}

export interface ChartBarProps {
  type: ChartType;
  data: ChartData[];
  summary?: ChartSummary[];
  height?: number;
  showLegend?: boolean;
  gridColor?: string;
  legendText?: string;
  currencySymbol?: string;
  legendIncomeText?: string;
  legendExpensesText?: string;
  colors?: string[];
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const GradientBar = () => (
  <svg>
    <defs>
      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="50%" stopColor="var(--accent-purple)" stopOpacity={0.8} />
        <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent-green)" stopOpacity={0.8} />
        <stop offset="100%" stopColor="var(--accent-teal)" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent-red)" stopOpacity={0.8} />
        <stop offset="100%" stopColor="var(--accent-pink)" stopOpacity={0.8} />
      </linearGradient>
    </defs>
  </svg>
);

const getTrianglePath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <path d={getTrianglePath(x, y, width, height)} stroke="none" fill={fill} />;
};

export const ChartBar = ({
  type,
  data,
  margin,
  summary,
  height = 264,
  showLegend = true,
  gridColor = 'var(--base-light-blue)',
  legendText = 'Value',
  currencySymbol = '$',
  legendIncomeText = 'Income',
  legendExpensesText = 'Expenses',
  colors = [
    'var(--accent-purple)',
    'var(--accent-blue)',
    'var(--accent-green)',
    'var(--accent-teal)',
    'var(--accent-red)',
    'var(--accent-pink)',
  ],
}: ChartBarProps) => {
  const formatValue = (value: number) => {
    return `${currencySymbol}${value.toLocaleString()}`;
  };

  const renderBar = (
    dataKey: string,
    fill: string,
    name: string,
    radius: [number, number, number, number],
    stackId?: string,
  ) => (
    <Bar
      dataKey={dataKey}
      fill={fill}
      name={name}
      radius={radius}
      stackId={stackId}
      label={{ position: 'top', formatter: formatValue }}
    />
  );

  const getBars = () => {
    switch (type) {
      case 'single':
        return renderBar('value', 'url(#barGradient)', legendText, [8, 8, 0, 0]);
      case 'double':
        return [
          { k: 'bar1', d: 'value1', s: 'a' },
          { k: 'bar2', d: 'value2', s: 'b' },
        ].map(({ k, d, s }) => (
          <Bar
            key={k}
            dataKey={d}
            fill="url(#barGradient)"
            name={legendText}
            radius={[8, 8, 0, 0]}
            stackId={s}
            label={{ position: 'top', formatter: formatValue }}
          />
        ));
      case 'triangle':
        return (
          <Bar
            dataKey="value"
            name={legendText}
            shape={<TriangleBar />}
            label={{ position: 'top', formatter: formatValue }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        );
      case 'composed':
        return [
          renderBar('expenses', 'url(#expensesGradient)', legendExpensesText, [0, 0, 0, 0], 'a'),
          renderBar('income', 'url(#incomeGradient)', legendIncomeText, [8, 8, 0, 0], 'a'),
        ].map((bar, i) => React.cloneElement(bar, { key: i }));
      default:
        return null;
    }
  };

  return (
    <div className={styles.chartBar}>
      <GradientBar />
      {summary && (
        <div className={styles.chartBar__summary}>
          {summary.map((item, i) => (
            <div key={i} className={styles.chartBar__summaryItem}>
              <span className={styles.chartBar__summaryName}>{item.name}:</span>
              <span className={styles.chartBar__summaryValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="name"
            stroke="var(--primary-light)"
            tick={{ fill: 'var(--primary-light)' }}
          />
          <YAxis stroke="var(--primary-light)" tick={{ fill: 'var(--primary-light)' }} />
          <Tooltip
            cursor={{ fill: 'var(--base-light-blue)' }}
            contentStyle={{
              backgroundColor: 'var(--base-white)',
              borderRadius: 'var(--radius-md)',
              border: 'none',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={formatValue}
          />
          {showLegend && <Legend iconType="circle" />}
          {getBars()}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

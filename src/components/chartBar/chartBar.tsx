'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './styles.module.scss';

export interface ChartData {
  name: string;
  value?: number;
  income?: number;
  expenses?: number;
}

export interface ChartSummary {
  name: string;
  value: string;
}

export interface ChartBarProps {
  data: ChartData[];
  summary?: ChartSummary[];
  height?: number;
  showLegend?: boolean;
  gridColor?: string;
  legendText?: string;
  currencySymbol?: string;
  legendIncomeText?: string;
  legendExpensesText?: string;
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

export const ChartBar = ({
  data,
  summary,
  height = 264,
  showLegend = true,
  gridColor = 'var(--base-light-blue)',
  legendText = 'Value',
  currencySymbol = '$',
  legendIncomeText = 'Income',
  legendExpensesText = 'Expenses',
}: ChartBarProps) => {
  const hasIncome = data.some((d) => d.income !== undefined);
  const hasExpenses = data.some((d) => d.expenses !== undefined);
  const hasValue = data.some((d) => d.value !== undefined);

  const formatValue = (value: number) => {
    return `${currencySymbol}${value.toLocaleString()}`;
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
        <BarChart data={data}>
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
              borderRadius: '0.5rem',
              border: 'none',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={(value: number) => formatValue(value)}
          />
          {showLegend && <Legend iconType="circle" />}

          {hasValue && (
            <Bar dataKey="value" fill="url(#barGradient)" name={legendText} radius={[8, 8, 0, 0]} />
          )}

          {hasExpenses && (
            <Bar
              dataKey="expenses"
              stackId="a"
              fill="url(#expensesGradient)"
              name={legendExpensesText}
              radius={[0, 0, 0, 0]}
            />
          )}

          {hasIncome && (
            <Bar
              dataKey="income"
              stackId="a"
              fill="url(#incomeGradient)"
              name={legendIncomeText}
              radius={[8, 8, 0, 0]}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

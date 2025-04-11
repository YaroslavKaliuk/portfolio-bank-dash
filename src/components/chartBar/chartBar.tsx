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
  Cell,
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
  type?: 'default' | 'triangle';
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
  type = 'default',
  colors = [
    'var(--accent-purple)',
    'var(--accent-blue)',
    'var(--accent-green)',
    'var(--accent-teal)',
    'var(--accent-red)',
    'var(--accent-pink)',
  ],
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
              borderRadius: '0.5rem',
              border: 'none',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
            itemStyle={{ color: 'var(--text-primary)' }}
            formatter={(value: number) => formatValue(value)}
          />
          {showLegend && <Legend iconType="circle" />}

          {type === 'triangle' && hasValue && (
            <Bar
              dataKey="value"
              name={legendText}
              shape={<TriangleBar />}
              label={{ position: 'top', formatter: (value: number) => formatValue(value) }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          )}

          {type === 'default' && hasValue && (
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

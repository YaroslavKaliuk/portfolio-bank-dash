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
  value: number;
}

export interface ChartSummary {
  name: string;
  value: string;
}

export interface ChartBarProps {
  data: ChartData[];
  summary?: ChartSummary[];
  height?: number;
}

const COLORS = ['var(--primary)'];

export const ChartBar = ({ data, summary, height = 240 }: ChartBarProps) => {
  return (
    <div className={styles.chartBar}>
      {summary && (
        <div className={styles.chartBar__summary}>
          {summary.map((item, index) => (
            <div key={index} className={styles.chartBar__summaryItem}>
              <span className={styles.chartBar__summaryName}>{item.name}</span>
              <span className={styles.chartBar__summaryValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: 'none',
            }}
          />
          <Legend />
          <Bar dataKey="value" fill={COLORS[0]} radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

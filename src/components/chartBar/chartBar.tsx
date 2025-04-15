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
  BarProps,
} from 'recharts';
import styles from './styles.module.scss';

export type ChartType = 'single' | 'double' | 'triangle' | 'composed';

export interface ChartData {
  name: string;
  [key: string]: number | string;
}

export interface ChartSummary {
  name: string;
  value: string;
}

export interface ChartBarConfig {
  dataKey: string;
  name: string;
  gradientId: string;
  label?: boolean;
  radius?: [number, number, number, number];
  stackId?: string;
  colors?: string[];
}

export interface ChartBarProps {
  type: ChartType;
  data: ChartData[];
  config: ChartBarConfig[];
  summary?: ChartSummary[];
  height?: number;
  showLegend?: boolean;
  gridColor?: string;
  currencySymbol?: string;
  colors?: string[];
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

interface TriangleBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const GradientBar = ({ gradients }: { gradients: { id: string; colors: string[] }[] }) => (
  <svg>
    <defs>
      {gradients.map(({ id, colors }) => (
        <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
          {colors.map((color, index) => (
            <stop
              key={index}
              offset={`${(index * 100) / (colors.length - 1)}%`}
              stopColor={color}
              stopOpacity={0.8}
            />
          ))}
        </linearGradient>
      ))}
    </defs>
  </svg>
);

const getTrianglePath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: TriangleBarProps) => {
  const { fill, x, y, width, height } = props;
  return <path d={getTrianglePath(x, y, width, height)} stroke="none" fill={fill} />;
};

export const ChartBar = ({
  type,
  data,
  config,
  margin,
  summary,
  height = 264,
  showLegend = true,
  gridColor = 'var(--base-light-blue)',
  currencySymbol = '$',
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

  const renderBar = (config: ChartBarConfig, index: number) => (
    <Bar
      key={`bar-${config.dataKey}-${index}`}
      dataKey={config.dataKey}
      name={config.name}
      fill={`url(#${config.gradientId})`}
      radius={config.radius || [8, 8, 0, 0]}
      stackId={config.stackId}
      label={config.label ? { position: 'top', formatter: formatValue } : undefined}
      shape={
        type === 'triangle'
          ? (props: BarProps) => <TriangleBar {...(props as TriangleBarProps)} />
          : undefined
      }
    />
  );

  const getBars = () => {
    switch (type) {
      case 'single':
      case 'double':
      case 'composed':
        return config.map((barConfig, index) => renderBar(barConfig, index));
      case 'triangle':
        return (
          <Bar
            key="triangle-bar"
            dataKey={config[0].dataKey}
            name={config[0].name}
            fill={`url(#${config[0].gradientId})`}
            shape={(props: BarProps) => <TriangleBar {...(props as TriangleBarProps)} />}
            label={{ position: 'top', formatter: formatValue }}
          />
        );
      default:
        return null;
    }
  };

  const gradients = config.map(({ gradientId, colors: gradientColors }, index) => ({
    id: gradientId,
    colors: gradientColors || [colors[0], colors[1]],
    key: `gradient-${gradientId}-${index}`,
  }));

  return (
    <div className={styles.chartBar}>
      <GradientBar gradients={gradients} />
      {summary && (
        <div className={styles.chartBar__summary}>
          {summary.map((item, index) => (
            <div key={`summary-${item.name}-${index}`} className={styles.chartBar__summaryItem}>
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
              border: 'none',
              boxShadow: 'var(--box-shadow-primary)',
              borderRadius: 'var(--border-radius-small)',
              backgroundColor: 'var(--base-white)',
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

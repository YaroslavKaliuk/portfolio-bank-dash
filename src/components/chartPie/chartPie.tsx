'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
interface ChartPieProps {
  data: { name: string; value?: number; stroke?: string; strokeWidth?: number }[];
  strokeWidth?: number;
  innerRadius?: number;
  outerRadius?: number;
  width?: number;
  height?: number;
  colors?: string[];
  showLegend?: boolean;
  showValue?: boolean;
  showLabels?: boolean;
  valuePrefix?: string;
  formatType?: 'percent' | 'currency';
  outerSectorGap?: number;
  outerSectorWidth?: number;
  cx?: string | number;
  cy?: string | number;
  startAngle?: number;
  endAngle?: number;
  isSemiCircle?: boolean;
}
export const ChartPie = ({
  data,
  strokeWidth = 4,
  innerRadius = 96,
  outerRadius = 144,
  width = 320,
  height = 320,
  colors = [
    'var(--primary)',
    'var(--accent-teal)',
    'var(--accent-pink)',
    'var(--accent-blue)',
    'var(--accent-red)',
    'var(--primary-light)',
    'var(--accent-green)',
    'var(--accent-purple)',
    'var(--accent-yellow)',
  ],
  showLegend = true,
  showValue = true,
  showLabels = false,
  valuePrefix = '$',
  formatType = 'currency',
  outerSectorGap = 8,
  outerSectorWidth = 16,
  cx = '50%',
  cy = '50%',
  startAngle = 360,
  endAngle = 0,
  isSemiCircle = false,
}: ChartPieProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const formatValue = (v: number) =>
    formatType === 'percent'
      ? v.toFixed(1) + '%'
      : formatType === 'currency'
        ? v.toLocaleString()
        : v.toString();
  const RADIAN = Math.PI / 180;
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }: any) => {
    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + r * Math.cos(-midAngle * RADIAN);
    const y = cy + r * Math.sin(-midAngle * RADIAN);
    return (
      <>
        <text
          className={cn(styles.chartPie__render, styles.chartPie__renderName)}
          x={x}
          y={y - 12}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {name}
        </text>
        <text
          className={cn(styles.chartPie__render, styles.chartPie__renderValue)}
          x={x}
          y={y + 12}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {valuePrefix + formatValue(value)}
        </text>
      </>
    );
  };
  const renderActiveShape = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    stroke,
  }: any) => (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        cornerRadius={8}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + outerSectorGap}
        outerRadius={outerRadius + outerSectorWidth}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        cornerRadius={8}
      />
    </g>
  );
  const renderCenter = () =>
    showValue ? (
      <div className={styles.chartPie__circleInfo}>
        <div className={styles.chartPie__circleValue}>
          {valuePrefix + formatValue(data[activeIndex]?.value || 0)}
        </div>
        <div className={styles.chartPie__circleName}>{data[activeIndex]?.name}</div>
      </div>
    ) : null;
  return (
    <ResponsiveContainer>
      <div className={cn(styles.chartPie, isSemiCircle && styles.chartPie__isSemiCircle)}>
        <div className={styles.chartPie__circle}>
          {renderCenter()}
          <PieChart width={width} height={height}>
            <Pie
              activeIndex={activeIndex}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              nameKey="name"
              stroke="var(--base-white)"
              strokeWidth={strokeWidth}
              onMouseEnter={(_, i) => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(0)}
              labelLine={false}
              {...(showLabels && { label: renderLabel })}
              activeShape={renderActiveShape}
              startAngle={startAngle}
              endAngle={endAngle}
              cornerRadius={8}
            >
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={colors[i % colors.length]}
                  stroke={entry.stroke || 'var(--base-white)'}
                  strokeWidth={strokeWidth}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        {showLegend && (
          <table className={styles.chartPie__table}>
            <tbody>
              {data.map((entry, i) => (
                <tr
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <td>
                    <div
                      className={styles.chartPie__tableDot}
                      style={{ backgroundColor: colors[i % colors.length] }}
                    />
                  </td>
                  <td>
                    <div className={styles.chartPie__tableName}>{entry.name}</div>
                  </td>
                  <td>
                    <div className={styles.chartPie__tableValue}>
                      {valuePrefix + formatValue(entry.value || 0)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </ResponsiveContainer>
  );
};

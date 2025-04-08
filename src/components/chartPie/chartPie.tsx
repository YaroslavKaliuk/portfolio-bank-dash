'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import styles from './styles.module.scss';
import { useState } from 'react';
interface ChartPieProps {
  data: Array<{
    name: string;
    value?: number;
    stroke?: string;
  }>;
  summary?: Array<{
    name: string;
    value: string;
  }>;
  innerRadius?: number;
  outerRadius?: number;
  width?: number;
  height?: number;
  colors?: string[];
  showLegend?: boolean;
  showValue?: boolean;
  valuePrefix?: string;
  formatType?: 'k' | 'percent' | 'currency';
}

export const ChartPie = ({
  data,
  innerRadius = 96,
  outerRadius = 144,
  width = 320,
  height = 320,
  colors = [
    'var(--primary)',
    'var(--accent-teal)',
    'var(--accent-yellow)',
    'var(--accent-red)',
    'var(--accent-purple)',
    'var(--accent-green)',
    'var(--primary-light)',
    'var(--accent-blue)',
    'var(--accent-pink)',
  ],
  showLegend = true,
  showValue = true,
  valuePrefix = '$',
  formatType = 'k',
}: ChartPieProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatValue = (value: number) => {
    switch (formatType) {
      case 'k':
        return value / 1000 + 'K';
      case 'percent':
        return value.toFixed(1) + '%';
      case 'currency':
        return value.toLocaleString();
      default:
        return value.toString();
    }
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, stroke } = props;
    return (
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
          strokeWidth={1}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 8}
          outerRadius={outerRadius + 12}
          fill={fill}
          stroke={stroke}
          strokeWidth={1}
        />
      </g>
    );
  };

  const renderValue = () => {
    if (!showValue || activeIndex === null) return null;
    const currentData = data[activeIndex];
    return (
      <div className={styles.chartPie__circleInfo}>
        <div className={styles.chartPie__circleValue}>
          {valuePrefix}
          {formatValue(currentData.value || 0)}
        </div>
        <div className={styles.chartPie__circleName}>{currentData.name}</div>
      </div>
    );
  };

  return (
    <ResponsiveContainer>
      <div className={styles.chartPie}>
        <div className={styles.chartPie__circle}>
          {renderValue()}
          <PieChart width={width} height={height}>
            <Pie
              activeIndex={activeIndex}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              nameKey="name"
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
              stroke="var(--base-white)"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  stroke={entry.stroke || 'var(--base-white)'}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        {showLegend && (
          <table className={styles.chartPie__table}>
            <tbody>
              {data.map((entry, index) => (
                <tr
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <td>
                    <div
                      className={styles.chartPie__tableDot}
                      style={{ backgroundColor: colors[index % colors.length] }}
                    ></div>
                  </td>
                  {entry.name && <td className={styles.chartPie__tableName}>{entry.name}</td>}
                  {entry.value && (
                    <td className={styles.chartPie__tableValue}>
                      {valuePrefix}
                      {formatValue(entry.value || 0)}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </ResponsiveContainer>
  );
};

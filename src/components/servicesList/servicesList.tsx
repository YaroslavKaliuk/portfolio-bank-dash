'use client';

import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface Service {
  icon?: ReactNode;
  title?: string;
  value?: string;
  button?: ReactNode;
}

interface ServicesListProps {
  rows: Service[][];
}

export const ServicesList: FC<ServicesListProps> = ({ rows }) => (
  <div className={styles.servicesList}>
    <table>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, itemIndex) => (
              <td key={`${rowIndex}-${itemIndex}`}>
                {item.icon && <div className={styles.servicesList__icon}>{item.icon}</div>}
                {item.title && (
                  <>
                    <div
                      className={cn(
                        styles.servicesList__title,
                        item.title?.startsWith('-')
                          ? styles.servicesList__isRed
                          : item.title?.startsWith('+')
                            ? styles.servicesList__isGreen
                            : '',
                      )}
                    >
                      {item.title}
                    </div>
                    <div className={styles.servicesList__value}>{item.value}</div>
                  </>
                )}
                {item.button && <div className={styles.servicesList__button}>{item.button}</div>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

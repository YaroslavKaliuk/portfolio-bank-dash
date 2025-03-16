'use client';

import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface BankService {
  icon?: ReactNode;
  title?: string;
  value?: string;
  button?: ReactNode;
}

interface BankServicesListProps {
  rows: BankService[][];
}

export const BankServicesList: FC<BankServicesListProps> = ({ rows }) => (
  <table className={cn(styles.bankServicesList)}>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((item, itemIndex) => (
            <td key={`${rowIndex}-${itemIndex}`}>
              {item.icon && <div className={styles.bankServicesList__icon}>{item.icon}</div>}
              {item.title && (
                <>
                  <div className={styles.bankServicesList__title}>{item.title}</div>
                  <div className={styles.bankServicesList__value}>{item.value}</div>
                </>
              )}
              {item.button && <div className={styles.bankServicesList__button}>{item.button}</div>}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

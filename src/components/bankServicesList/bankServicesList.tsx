'use client';

import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { div } from 'framer-motion/client';

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
  <div className={styles.bankServicesList}>
    <table>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, itemIndex) => (
              <td key={`${rowIndex}-${itemIndex}`}>
                {item.icon && <div className={styles.bankServicesList__icon}>{item.icon}</div>}
                {item.title && (
                  <>
                    <div
                      className={cn(
                        styles.bankServicesList__title,
                        item.title?.startsWith('-')
                          ? styles.bankServicesList__isRed
                          : item.title?.startsWith('+')
                            ? styles.bankServicesList__isGreen
                            : '',
                      )}
                    >
                      {item.title}
                    </div>
                    <div className={styles.bankServicesList__value}>{item.value}</div>
                  </>
                )}
                {item.button && (
                  <div className={styles.bankServicesList__button}>{item.button}</div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

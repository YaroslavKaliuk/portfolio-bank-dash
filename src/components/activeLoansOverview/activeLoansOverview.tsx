'use client';

import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface ActiveLoanService {
  th?: string;
  td?: string;
  button?: ReactNode;
}

interface ActiveLoansOverviewProps {
  tbody: ActiveLoanService[][];
  thead?: ActiveLoanService[][];
  tfoot?: ActiveLoanService[][];
}

export const ActiveLoansOverview: FC<ActiveLoansOverviewProps> = ({ tbody, thead, tfoot }) => (
  <div className={cn(styles.activeLoansOverview)}>
    <table>
      <thead>
        {thead &&
          thead.map((th, thIndex) => (
            <tr key={thIndex}>
              {th.map((item, itemIndex) => (
                <th className={styles.activeLoansOverview__th} key={`${thIndex}-${itemIndex}`}>
                  {item.th && <>{item.th}</>}
                </th>
              ))}
            </tr>
          ))}
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className={styles.activeLoansOverview__td}>
              {`${String(rowIndex + 1).padStart(2, '0')}.`}
            </td>
            {row.map((item, itemIndex) => (
              <td
                key={`${rowIndex}-${itemIndex}`}
                className={cn(
                  styles.activeLoansOverview__td,
                  item.td?.startsWith('-')
                    ? styles.activeLoansOverview__isRed
                    : item.td?.startsWith('+')
                      ? styles.activeLoansOverview__isGreen
                      : '',
                )}
              >
                {item.td && <>{item.td}</>}
                {item.button && <>{item.button}</>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {tfoot &&
          tfoot.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, itemIndex) => (
                <td className={styles.activeLoansOverview__td} key={`${rowIndex}-${itemIndex}`}>
                  {item.td && <>{item.td}</>}
                </td>
              ))}
            </tr>
          ))}
      </tfoot>
    </table>
  </div>
);

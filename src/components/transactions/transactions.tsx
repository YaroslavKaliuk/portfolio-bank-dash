'use client';

import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface Transaction {
  icon?: ReactNode;
  title?: string;
  date?: string;
  category?: string;
  card?: string;
  status?: string;
  amount?: string;
}

export interface TransactionsProps {
  transactions: Transaction[];
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div className={cn(styles.transactions)}>
      <table>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              {transaction.icon && (
                <td className={styles.transactions__icon}>{transaction.icon}</td>
              )}
              {transaction.title && (
                <td className={styles.transactions__title}>{transaction.title}</td>
              )}
              {transaction.date && (
                <td className={styles.transactions__date}>{transaction.date}</td>
              )}
              {transaction.category && (
                <td className={styles.transactions__category}>{transaction.category}</td>
              )}
              {transaction.card && (
                <td className={styles.transactions__card}>{transaction.card}</td>
              )}
              {transaction.status && (
                <td className={styles.transactions__status}>{transaction.status}</td>
              )}
              {transaction.amount && (
                <td
                  className={cn(
                    styles.transactions__amount,
                    transaction.amount.startsWith('-')
                      ? styles.transactions__amountRed
                      : transaction.amount.startsWith('+')
                        ? styles.transactions__amountGreen
                        : '',
                  )}
                >
                  {transaction.amount}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

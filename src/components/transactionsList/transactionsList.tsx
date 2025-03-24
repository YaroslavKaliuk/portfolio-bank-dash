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

interface TransactionsListProps {
  transactions: Transaction[];
}

export const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className={cn(styles.transactionsList)}>
      <table>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              {transaction.icon && (
                <td className={styles.transactionsList__icon}>{transaction.icon}</td>
              )}
              {transaction.title && (
                <td className={styles.transactionsList__title}>{transaction.title}</td>
              )}
              {transaction.date && (
                <td className={styles.transactionsList__date}>{transaction.date}</td>
              )}
              {transaction.category && (
                <td className={styles.transactionsList__category}>{transaction.category}</td>
              )}
              {transaction.card && (
                <td className={styles.transactionsList__card}>{transaction.card}</td>
              )}
              {transaction.status && (
                <td className={styles.transactionsList__status}>{transaction.status}</td>
              )}
              {transaction.amount && (
                <td
                  className={cn(
                    styles.transactions__amount,
                    transaction.amount.startsWith('-')
                      ? styles.transactionsList__amountRed
                      : transaction.amount.startsWith('+')
                        ? styles.transactionsList__amountGreen
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

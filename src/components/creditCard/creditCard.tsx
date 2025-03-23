'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export interface CardsItem {
  number: string;
  balanceValue: string;
  validThruDate: string;
  holderName: string;
  isDark?: boolean;
  isLight?: boolean;
}

export interface CreditCardProps {
  cards?: CardsItem[];
}

export const CreditCard: FC<CreditCardProps> = ({ cards }) => {
  return (
    <div className={cn(styles.creditCard)}>
      {cards?.map((card, index) => (
        <div
          key={index}
          className={cn(
            styles.creditCard__item,
            card.isDark && styles.creditCard__isDark,
            card.isLight && styles.creditCard__isLight,
          )}
        >
          <div className={styles.creditCard__balance}>
            <div className={styles.creditCard__balanceTitle}>Balance</div>
            <div className={styles.creditCard__balanceValue}>{card.balanceValue}</div>
          </div>
          <div className={styles.creditCard__chip}>
            <Icons.IconCardChip />
          </div>
          <div className={styles.creditCard__info}>
            <div className={styles.creditCard__holder}>
              <div className={styles.creditCard__holderTitle}>Card Holder</div>
              <div className={styles.creditCard__holderName}>{card.holderName}</div>
            </div>
            <div className={styles.creditCard__validThru}>
              <div className={styles.creditCard__validThruTitle}>Valid Thru</div>
              <div className={styles.creditCard__validThruDate}>{card.validThruDate}</div>
            </div>
          </div>
          <div className={styles.creditCard__number}>{card.number}</div>
          <div className={styles.creditCard__logo}>
            <Icons.IconLogoMasterCard />
          </div>
        </div>
      ))}
    </div>
  );
};

'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export interface CardsItem {
  number: string;
  balanceTitle: string;
  balanceValue: string;
  validThruTitle: string;
  validThruDate: string;
  holderTitle: string;
  holderName: string;
  isDark?: boolean;
  isLight?: boolean;
  code?: string;
}

export interface CreditCardProps {
  cards?: CardsItem[];
}

export const CreditCard: FC<CreditCardProps> = ({ cards }) => {
  return (
    <div className={cn(styles.creditCard)}>
      {cards?.map((card, index) => (
        <div key={index} className={styles.creditCard__item}>
          <div
            className={cn(
              styles.creditCard__inner,
              card.isDark && styles.creditCard__isDark,
              card.isLight && styles.creditCard__isLight,
            )}
          >
            <div className={styles.creditCard__front}>
              <div className={styles.creditCard__frontBalance}>
                <div className={styles.creditCard__frontBalanceTitle}>{card.balanceTitle}</div>
                <div className={styles.creditCard__frontBalanceValue}>{card.balanceValue}</div>
              </div>
              <div className={styles.creditCard__frontChip}>
                <Icons.IconCardChip />
              </div>
              <div className={styles.creditCard__frontInfo}>
                <div className={styles.creditCard__frontHolder}>
                  <div className={styles.creditCard__frontHolderTitle}>{card.holderTitle}</div>
                  <div className={styles.creditCard__frontHolderName}>{card.holderName}</div>
                </div>
                <div className={styles.creditCard__frontValidThru}>
                  <div className={styles.creditCard__frontValidThruTitle}>
                    {card.validThruTitle}
                  </div>
                  <div className={styles.creditCard__frontValidThruDate}>{card.validThruDate}</div>
                </div>
              </div>
              <div className={styles.creditCard__frontNumber}>{card.number}</div>
              <div className={styles.creditCard__frontLogo}>
                <Icons.IconLogoMasterCard />
              </div>
            </div>
            <div className={styles.creditCard__back}>
              <div className={styles.creditCard__backSignature}>{card.holderName}</div>
              <div className={styles.creditCard__backCode}>{card.code}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

'use client';

import { useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';
import { useTranslations } from 'next-intl';

const initial = [
  '💳 Payment received! $250.00',
  '🚨 Low balance alert! $12.45',
  '✅ Transfer complete: $100',
  '🔐 New device logged in',
  '💰 Deposit cleared: $1,200',
  '📱 Bill paid: $75.99',
  '🏦 Loan approved! $5,000',
];

export const Notifications = () => {
  const [items, setItems] = useState(initial);
  const t = useTranslations();
  return (
    <div className={cn(styles.notifications)}>
      <input type="checkbox" id="notifications" hidden />
      <label className={styles.notifications__bg} htmlFor="notifications" />
      <label className={styles.notifications__toggle} htmlFor="notifications">
        <Icons.IconBell />
        <span className={styles.notifications__count}>{items.length || '0'}</span>
      </label>
      <div className={styles.notifications__dropdown}>
        <div className={styles.notifications__list}>
          {items.length ? (
            items.map((text, i) => (
              <div key={i} className={styles.notifications__item}>
                <div className={styles.notifications__title}>{text}</div>
                <button
                  className={styles.notifications__remove}
                  type="button"
                  onClick={() => setItems((prev) => prev.filter((_, idx) => idx !== i))}
                >
                  <Icons.IconTrash />
                </button>
              </div>
            ))
          ) : (
            <div className={styles.notifications__empty}>{t('common.noNotifications')}</div>
          )}
        </div>
      </div>
    </div>
  );
};

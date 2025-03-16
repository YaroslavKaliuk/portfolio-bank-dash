'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import styles from './styles.module.scss';

export interface MainProps {
  children?: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const locale = routing.locales.includes(segments[0] as any)
    ? (segments[0] as (typeof routing.locales)[number])
    : routing.defaultLocale;
  const pageName = segments.slice(1).join('-') || 'home';

  return (
    <main className={cn(styles.main)} data-page={pageName} data-locale={locale}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
};

'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import styles from './styles.module.scss';

export interface LayoutMainProps {
  children?: ReactNode;
}

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as string | undefined;
  const locale =
    firstSegment && (routing.locales as readonly string[]).includes(firstSegment)
      ? (firstSegment as 'en' | 'es')
      : routing.defaultLocale;
  const pageName = segments.slice(1).join('-') || 'home';

  return (
    <main
      className={cn(styles.layoutMain)}
      key={pathname}
      data-page={pageName}
      data-locale={locale}
    >
      <div className={styles.layoutMain__scroll}>
        <div className={styles.layoutMain__container}>{children}</div>
      </div>
    </main>
  );
};

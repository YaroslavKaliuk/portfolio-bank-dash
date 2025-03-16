'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

export function Caption() {
  const t = useTranslations();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const pageKey =
    segments.length > 1
      ? segments.at(-1)?.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
      : null;

  if (!pageKey || !t.raw(`nav.${pageKey}`)) return null;

  return <h1 className={cn(styles.caption)}>{t(`nav.${pageKey}`)}</h1>;
}

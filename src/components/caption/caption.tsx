'use client';

import cn from 'classnames';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export const Caption = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean) || [];
  const pageKey = segments.length > 1 ? segments.at(-1)?.replace('-', '_') : null;

  if (!pageKey || !t.raw(`nav.${pageKey}`)) return null;

  return <h1 className={cn(styles.caption)}>{t(`nav.${pageKey}`)}</h1>;
};

'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <div className={cn(styles.copyright)}>
      <Link
        className={styles.copyright__link}
        href={'https://www.linkedin.com/in/yaroslav-kaliuk/'}
        target="_blank"
      >
        {t('common.made')}
      </Link>
      <small className={styles.copyright__year}>
        &copy; {t('common.copyright')} {currentYear}
      </small>
    </div>
  );
};

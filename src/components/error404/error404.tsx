import cn from 'classnames';
import styles from './styles.module.scss';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from '../button';

export const Error404 = () => {
  const t = useTranslations();

  return (
    <div className={cn(styles.error404)}>
      <h1 className={styles.error404__title}>404</h1>
      <p className={styles.error404__description}>{t('notFound.title')}</p>
      <Button href={`/${routing.defaultLocale}/dashboard`} title={t('notFound.button')} />
    </div>
  );
};

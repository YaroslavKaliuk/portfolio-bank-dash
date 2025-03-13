'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button, Switcher } from '@/components';
import { useTranslations } from 'next-intl';

export const FormPreferences = () => {
  const t = useTranslations();

  return (
    <form className={cn(styles.formPreferences)}>
      <div className={styles.formPreferences__inputs}>
        <Input type="text" translationKey="form.currency" defaultValue="USD" />
        <Input
          type="text"
          translationKey="form.timeZone"
          defaultValue="(GMT-12:00) International Date Line West"
        />
      </div>
      <div className={styles.formPreferences__switchers}>
        <h3 className={styles.formPreferences__switchersTitle}>{t('form.notification')}</h3>
        <Switcher
          type="checkbox"
          translationKey="form.digitalCurrency"
          defaultChecked={true}
        />
        <Switcher type="checkbox" translationKey="form.merchantOrder" />
        <Switcher
          type="checkbox"
          translationKey="form.accountRecommendations"
          defaultChecked={true}
        />
      </div>
      <div className={styles.formPreferences__button}>
        <Button translationKey="common.save" />
      </div>
    </form>
  );
};

'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button, Switcher } from '@/components';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

export const FormPreferences = () => {
  const t = useTranslations();

  const notify = () =>
    toast(t('toast.settingsHasBeenUpdated'), {
      icon: '✅',
    });

  return (
    <form className={cn(styles.formPreferences)} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formPreferences__inputs}>
        <Input type="text" title={t('form.currency')} defaultValue="USD" />
        <Input
          type="text"
          title={t('form.timeZone')}
          defaultValue="(GMT-12:00) International Date Line West"
        />
      </div>
      <div className={styles.formPreferences__switchers}>
        <h3 className={styles.formPreferences__switchersTitle}>{t('form.notification')}</h3>
        <Switcher type="checkbox" title={t('form.digitalCurrency')} defaultChecked={true} />
        <Switcher type="checkbox" title={t('form.merchantOrder')} />
        <Switcher type="checkbox" title={t('form.accountRecommendations')} defaultChecked={true} />
      </div>
      <div className={styles.formPreferences__button}>
        <Button title={t('common.save')} onClick={notify} />
      </div>
    </form>
  );
};

'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button, Switcher } from '@/components';
import { useTranslations } from 'next-intl';

export const FormSecurity = () => {
  const t = useTranslations();

  return (
    <form className={cn(styles.formSecurity)}>
      <div className={styles.formSecurity__inputs}>
        <Input type="password" title={t('form.currentPassword')} defaultValue="00000000" />
        <Input type="password" title={t('form.newPassword')} defaultValue="11111111" />
      </div>
      <div className={styles.formSecurity__switchers}>
        <h3 className={styles.formSecurity__switchersTitle}>{t('form.twoFactorAuth')}</h3>
        <Switcher type="checkbox" title={t('form.enableTwoFactor')} defaultChecked={true} />
      </div>
      <div className={styles.formSecurity__button}>
        <Button title={t('common.save')} />
      </div>
    </form>
  );
};

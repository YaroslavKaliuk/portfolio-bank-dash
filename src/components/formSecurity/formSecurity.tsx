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
        <Input type="password" translationKey="form.currentPassword" defaultValue="00000000" />
        <Input type="password" translationKey="form.newPassword" defaultValue="11111111" />
      </div>
      <div className={styles.formSecurity__switchers}>
        <h3 className={styles.formSecurity__switchersTitle}>{t('form.twoFactorAuth')}</h3>
        <Switcher
          type="checkbox"
          translationKey="form.enableTwoFactor"
          defaultChecked={true}
        />
      </div>
      <div className={styles.formSecurity__button}>
        <Button translationKey="common.save" />
      </div>
    </form>
  );
};

'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button, Switcher } from '@/components';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const FormPromo = () => {
  const t = useTranslations();
  const [isAgreed, setIsAgreed] = useState(false);

  const notify = () =>
    toast(t('toast.messageHasBeenSent'), {
      icon: '✅',
    });

  return (
    <form className={cn(styles.formPromo)} onSubmit={(e) => e.preventDefault()}>
      <Input type="text" title={t('form.yourName')} defaultValue="Jada Jackson" />
      <Input type="email" title={t('form.email')} defaultValue="charlenereed@gmail.com" />
      <Input type="text" title={t('form.phone')} defaultValue="+123 456 7890" />
      <div className={styles.formPromo__switchers}>
        <Switcher type="checkbox" title={t('form.subscribeToPromo')} defaultChecked={true} />
        <Switcher
          type="checkbox"
          title={t('form.iAgree')}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </div>
      <Button title={t('form.send')} disabled={!isAgreed} onClick={notify} />
    </form>
  );
};

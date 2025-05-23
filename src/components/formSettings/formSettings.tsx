'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button, Avatar } from '@/components';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

export const FormSettings = () => {
  const t = useTranslations();

  const notify = () =>
    toast(t('toast.settingsHasBeenUpdated'), {
      icon: '✅',
    });

  return (
    <form className={cn(styles.formSettings)} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formSettings__avatar}>
        <Avatar isEditable />
      </div>
      <div className={styles.formSettings__inputs}>
        <Input type="text" title={t('form.yourName')} defaultValue="Jada Jackson" />
        <Input type="text" title={t('form.userName')} defaultValue="Charlene777" />
        <Input type="email" title={t('form.email')} defaultValue="charlenereed@gmail.com" />
        <Input type="password" title={t('form.password')} defaultValue="00000000" />
        <Input type="date" title={t('form.dateOfBirth')} defaultValue="1990-01-25" />
        <Input
          type="text"
          title={t('form.presentAddress')}
          defaultValue="San Jose, California, USA"
        />
        <Input
          type="text"
          title={t('form.permanentAddress')}
          defaultValue="San Jose, California, USA"
        />
        <Input type="text" title={t('form.city')} defaultValue="San Jose" />
        <Input type="text" title={t('form.postalCode')} defaultValue="45962" />
        <Input type="text" title={t('form.country')} defaultValue="USA" />
      </div>
      <div className={styles.formSettings__button}>
        <Button title={t('common.save')} onClick={notify} />
      </div>
    </form>
  );
};

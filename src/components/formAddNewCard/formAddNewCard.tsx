'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Input, Button } from '@/components';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

export const FormAddNewCard = () => {
  const t = useTranslations();

  const notify = () =>
    toast(t('toast.newCardHasBeenAdded'), {
      icon: '✅',
    });

  return (
    <form className={cn(styles.formAddNewCard)} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formAddNewCard__description}>{t('form.description')}</div>
      <div className={styles.formAddNewCard__inputs}>
        <Input type="text" title={t('form.cardType')} placeholder="Classic" />
        <Input type="text" title={t('form.nameOnCard')} placeholder="Jada Jackson" />
        <Input
          type="text"
          title={t('form.cardNumber')}
          placeholder="**** **** **** ****"
          inputMode="numeric"
          pattern="\d{4} \d{4} \d{4} \d{4}"
          maxLength={19}
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            let value = e.currentTarget.value.replace(/\D/g, '');
            value = value.slice(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.currentTarget.value = value;
          }}
        />
        <Input type="date" title={t('form.expirationDate')} placeholder="2020-01-25" />
      </div>
      <div className={styles.formAddNewCard__button}>
        <Button title={t('form.addCard')} onClick={notify} />
      </div>
    </form>
  );
};

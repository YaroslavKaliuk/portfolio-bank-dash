import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export interface SwitcherProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title?: string;
  translationKey?: string;
}

export const Switcher: FC<SwitcherProps> = ({ title, type = 'checkbox', translationKey, ...props }) => {
  const t = useTranslations();
  const switcherTitle = translationKey ? t(translationKey) : title;

  return (
    <label className={cn(styles.switcher)}>
      <input type={type} defaultChecked={false} {...props} />
      {switcherTitle && <span className={styles.switcher__title}>{switcherTitle}</span>}
    </label>
  );
};

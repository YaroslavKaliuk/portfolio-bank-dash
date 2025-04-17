import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface SwitcherProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title?: string;
}

export const Switcher: FC<SwitcherProps> = ({ title, type = 'checkbox', ...props }) => {
  return (
    <label className={cn(styles.switcher)}>
      <input type={type} defaultChecked={false} {...props} />
      {title && <span className={styles.switcher__title}>{title}</span>}
    </label>
  );
};

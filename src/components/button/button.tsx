'use client';

import cn from 'classnames';
import { FC, ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  translationKey?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  iconLeft,
  iconRight,
  translationKey,
  ...props
}) => {
  const t = useTranslations();
  const buttonTitle = translationKey ? t(translationKey) : title;

  return (
    <button className={cn(styles.button)} {...props}>
      {iconLeft}
      {buttonTitle}
      {iconRight}
    </button>
  );
};

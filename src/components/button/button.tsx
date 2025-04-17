'use client';

import cn from 'classnames';
import { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type ButtonProps = {
  title?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  translationKey?: string;
  isOutline?: boolean;
  href?: string;
} & (
  | Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'>
  | Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'>
);

export const Button: FC<ButtonProps> = ({
  title,
  iconLeft,
  iconRight,
  translationKey,
  isOutline,
  href,
  ...props
}) => {
  const className = cn(styles.button, isOutline && styles.button__isOutline);

  return href ? (
    <Link href={href} className={className} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {iconLeft}
      {title}
      {iconRight}
    </Link>
  ) : (
    <button className={className} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconLeft}
      {title}
      {iconRight}
    </button>
  );
};

'use client';
import cn from 'classnames';
import { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  title?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isOutline?: boolean;
  href?: string;
  onClick?: () => void;
  download?: string;
} & (
  | Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'>
  | Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'>
);

export const Button: FC<Props> = ({
  title,
  iconLeft,
  iconRight,
  isOutline,
  href,
  onClick,
  download,
  ...p
}) => {
  const cls = cn(styles.button, isOutline && styles.button__isOutline);
  return href ? (
    download ? (
      <a
        href={href}
        download={download}
        className={cls}
        {...(p as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconLeft}
        {title}
        {iconRight}
      </a>
    ) : (
      <Link href={href} className={cls} {...(p as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {iconLeft}
        {title}
        {iconRight}
      </Link>
    )
  ) : (
    <button onClick={onClick} className={cls} {...(p as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconLeft}
      {title}
      {iconRight}
    </button>
  );
};

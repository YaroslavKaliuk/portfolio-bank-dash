'use client';

import cn from 'classnames';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import Link from 'next/link';
import * as Icons from '@/icons';

const navItems = [
  { key: 'nav.dashboard', href: '/dashboard', icon: <Icons.IconHome /> },
  { key: 'nav.transactions', href: '/transactions', icon: <Icons.IconTransfer /> },
  { key: 'nav.accounts', href: '/accounts', icon: <Icons.IconUser /> },
  { key: 'nav.investments', href: '/investments', icon: <Icons.IconGraph /> },
  { key: 'nav.creditCards', href: '/credit-cards', icon: <Icons.IconCreditCard /> },
  { key: 'nav.loans', href: '/loans', icon: <Icons.IconLoan /> },
  { key: 'nav.services', href: '/services', icon: <Icons.IconService /> },
  { key: 'nav.settings', href: '/settings', icon: <Icons.IconCog /> },
];

export const Nav: FC = () => {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = pathname.split('/')[1] || 'en';

  const handleClick = () =>
    document.querySelector<HTMLInputElement>("input[name='navButton']")?.click();

  return (
    <nav className={cn(styles.nav)}>
      {navItems.map(({ key, href, icon }) => (
        <Link
          key={href}
          className={cn(styles.nav__link, {
            [styles.nav__linkActive]: pathname === `/${locale}${href}`,
          })}
          href={`/${locale}${href}`}
          onClick={handleClick}
        >
          {icon}
          {t(key)}
        </Link>
      ))}
    </nav>
  );
};

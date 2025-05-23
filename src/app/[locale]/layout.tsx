import { LayoutApp, LayoutAside, LayoutFooter, LayoutHeader, LayoutMain } from '@/layouts';
import {
  Avatar,
  Caption,
  Copyright,
  LanguageSwitcher,
  Loader,
  Logo,
  Nav,
  NavToggle,
  Search,
  AboutMyWork,
  ThemeSwitcher,
  Notify,
  Notifications,
} from '@/components';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Suspense } from 'react';

type Locale = (typeof routing.locales)[number];

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages({ locale });
  const meta = messages.meta as { title: string; description: string };

  return {
    title: `${meta.title} - ${locale.toUpperCase()}`,
    description: meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <LayoutApp>
        <LayoutHeader>
          <NavToggle />
          <Caption />
          <Search isHeader />
          <Notifications />
          <LanguageSwitcher isHeader />
          <ThemeSwitcher isHeader />
          <Avatar />
        </LayoutHeader>
        <LayoutAside>
          <Logo />
          <Search isAside />
          <LanguageSwitcher isAside />
          <ThemeSwitcher isAside />
          <Nav />
          <AboutMyWork />
        </LayoutAside>
        <LayoutMain>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </LayoutMain>
        <LayoutFooter>
          <Copyright />
        </LayoutFooter>
      </LayoutApp>
      <Notify />
    </NextIntlClientProvider>
  );
}

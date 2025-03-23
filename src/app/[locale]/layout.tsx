import { LayoutApp, LayoutAside, LayoutFooter, LayoutHeader, LayoutMain } from '@/layouts';
import {
  Avatar,
  Caption,
  Copyright,
  LanguageSwitcher,
  Logo,
  Nav,
  NavToggle,
  Search,
  ThemeSwitcher,
} from '@/components';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@styles/index.scss';

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LayoutApp>
            <LayoutHeader>
              <NavToggle />
              <Caption />
              <Search isHeader />
              <LanguageSwitcher isHeader />
              <ThemeSwitcher isHeader />
              <Avatar count={10} />
            </LayoutHeader>
            <LayoutAside>
              <Logo />
              <Search isAside />
              <LanguageSwitcher isAside />
              <ThemeSwitcher isAside />
              <Nav />
            </LayoutAside>
            <LayoutMain>{children}</LayoutMain>
            <LayoutFooter>
              <Copyright />
            </LayoutFooter>
          </LayoutApp>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { App, Aside, Footer, Header, Main } from '@/layouts';
import {
  Avatar,
  Caption,
  Copyright,
  LanguageSwitcher,
  Logo,
  Nav,
  NavButton,
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
          <App>
            <Header>
              <NavButton />
              <Caption />
              <Search isHeader />
              <LanguageSwitcher isHeader />
              <ThemeSwitcher isHeader />
              <Avatar count={10} />
            </Header>
            <Aside>
              <Logo />
              <Search isAside />
              <LanguageSwitcher isAside />
              <ThemeSwitcher isAside />
              <Nav />
            </Aside>
            <Main>{children}</Main>
            <Footer>
              <Copyright />
            </Footer>
          </App>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

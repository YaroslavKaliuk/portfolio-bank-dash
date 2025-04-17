import React from 'react';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import CreditCardsClient from './client';
import { i18nConfig } from '@/i18n/config';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = messages.meta as { title: string; description: string };
  const nav = messages.nav as { creditCards: string };

  return {
    title: `${nav.creditCards} - ${meta.title}`,
    description: meta.description,
  };
}

export default function Page() {
  return <CreditCardsClient />;
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

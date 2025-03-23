import React from 'react';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import TransactionsClient from './client';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = messages.meta as { title: string; description: string };
  const nav = messages.nav as { transactions: string };

  return {
    title: `${nav.transactions} - ${meta.title}`,
    description: meta.description,
  };
}

export default function Page() {
  return <TransactionsClient />;
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

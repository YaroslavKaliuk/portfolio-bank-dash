import React from 'react';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import ServicesClient from './client';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = messages.meta as { title: string; description: string };
  const nav = messages.nav as { services: string };

  return {
    title: `${nav.services} - ${meta.title}`,
    description: meta.description,
  };
}

export default function Page() {
  return <ServicesClient />;
}

'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function TransactionsClient() {
  const t = useTranslations();
  return <h1>{t('nav.transactions')}</h1>;
}

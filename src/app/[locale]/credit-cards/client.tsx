'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function CreditCardsClient() {
  const t = useTranslations();
  return <h1>{t('nav.creditCards')}</h1>;
}

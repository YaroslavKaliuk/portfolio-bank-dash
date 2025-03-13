'use client';

import { useTranslations } from 'next-intl';

export default function DashboardClient() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t('nav.dashboard')}</h1>
    </div>
  );
}

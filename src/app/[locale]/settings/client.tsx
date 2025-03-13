'use client';

import { Tabs, FormSettings, FormPreferences, FormSecurity } from '@/components';
import { useTranslations } from 'next-intl';

export default function SettingsClient() {
  const t = useTranslations();

  return (
    <Tabs
      name="settings"
      tabs={[
        {
          nav: t('settings.notification'),
          content: <>Content2</>,
          defaultChecked: true,
        },
        { nav: t('settings.profile'), content: <FormSettings /> },
        { nav: t('settings.preferences'), content: <FormPreferences /> },
        { nav: t('settings.security'), content: <FormSecurity /> },
      ]}
    />
  );
}

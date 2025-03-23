'use client';

import React from 'react';
import { LayoutBox, LayoutRow } from '@/layouts';
import { Tabs, FormSettings, FormPreferences, FormSecurity } from '@/components';
import { useTranslations } from 'next-intl';

export default function SettingsClient() {
  const t = useTranslations();

  return (
    <LayoutRow>
      <LayoutBox>
        <Tabs
          name="settings"
          tabs={[
            { nav: t('settings.profile'), content: <FormSettings />, defaultChecked: true },
            { nav: t('settings.preferences'), content: <FormPreferences /> },
            { nav: t('settings.security'), content: <FormSecurity /> },
          ]}
        />
      </LayoutBox>
    </LayoutRow>
  );
}

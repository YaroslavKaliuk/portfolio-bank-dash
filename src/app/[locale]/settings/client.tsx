'use client';

import React from 'react';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { Tabs, FormSettings, FormPreferences, FormSecurity } from '@/components';
import { useTranslations } from 'next-intl';

export default function SettingsClient() {
  const t = useTranslations();

  return (
    <LayoutRow>
      <LayoutBlock>
        <Tabs
          name="settings"
          tabs={[
            { nav: t('settings.profile'), content: <FormSettings />, defaultChecked: true },
            { nav: t('settings.preferences'), content: <FormPreferences /> },
            { nav: t('settings.security'), content: <FormSecurity /> },
          ]}
        />
      </LayoutBlock>
    </LayoutRow>
  );
}

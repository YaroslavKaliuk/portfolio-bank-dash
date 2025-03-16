'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FinancialOverview } from '@/components';
import * as Icons from '@/icons';

export default function LoansClient() {
  const t = useTranslations();
  return (
    <FinancialOverview
      items={[
        {
          icon: <Icons.IconUser />,
          title: t('financialOverview.personalLoans'),
          value: '$50,000',
        },
        {
          icon: <Icons.IconBriefcase />,
          title: t('financialOverview.corporateLoans'),
          value: '$100,000',
        },
        {
          icon: <Icons.IconGraph />,
          title: t('financialOverview.businessLoans'),
          value: '$500,000',
        },
        {
          icon: <Icons.IconService />,
          title: t('financialOverview.customLoans'),
          value: t('financialOverview.customLoans'),
        },
      ]}
    />
  );
}

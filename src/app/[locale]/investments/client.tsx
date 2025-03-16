'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FinancialOverview } from '@/components';
import * as Icons from '@/icons';

export default function InvestmentsClient() {
  const t = useTranslations();
  return (
    <FinancialOverview
      items={[
        {
          icon: <Icons.IconMoney />,
          title: t('financialOverview.totalInvestedAmount'),
          value: '$150,000',
        },
        {
          icon: <Icons.IconNumberOfInvestments />,
          title: t('financialOverview.numberOfInvestments'),
          value: '1,250',
        },
        {
          icon: <Icons.IconRateOfReturn />,
          title: t('financialOverview.rateOfReturn'),
          value: '+5.80%',
        },
      ]}
    />
  );
}

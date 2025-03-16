'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FinancialOverview } from '@/components';
import * as Icons from '@/icons';

export default function AccountsClient() {
  const t = useTranslations();
  return (
    <FinancialOverview
      items={[
        {
          icon: <Icons.IconMoney />,
          title: t('financialOverview.myBalance'),
          value: '$12,750',
        },
        {
          icon: <Icons.IconLoan />,
          title: t('financialOverview.income'),
          value: '$5,600',
        },
        {
          icon: <Icons.IconExpense />,
          title: t('financialOverview.expense'),
          value: '$3,460',
        },
        {
          icon: <Icons.IconSaving />,
          title: t('financialOverview.totalSaving'),
          value: '$7,920',
        },
      ]}
    />
  );
}

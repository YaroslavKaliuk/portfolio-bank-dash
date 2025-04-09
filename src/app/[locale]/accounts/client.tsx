'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutRow, LayoutBlock } from '@/layouts';
import { ChartPie, CreditCard, FinancialOverview, Title, TransactionsList } from '@/components';
import * as Icons from '@/icons';

export default function AccountsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconSaving />}
            title={t('financialOverview.myBalance')}
            value={'$12,750'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconLoan />}
            title={t('financialOverview.income')}
            value={'$5,600'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconExpense />}
            title={t('financialOverview.expense')}
            value={'$3,460'}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="lastTransactions" />
        <LayoutBlock>
          <TransactionsList
            transactions={[
              {
                icon: <Icons.IconService />,
                title: t('transactions.list.mobileService'),
                date: '25 Jan 2025',
                category: t('transactions.list.categories.service'),
                card: '**** 1234',
                status: t('transactions.list.status.completed'),
                amount: '-$150',
              },
              {
                icon: <Icons.IconLogoSpotify />,
                title: t('transactions.list.spotifySubscription'),
                date: '25 Jan 2025',
                category: t('transactions.list.categories.shopping'),
                card: '**** 1234',
                status: t('transactions.list.status.pending'),
                amount: '-$150',
              },
              {
                icon: <Icons.IconUser />,
                title: t('transactions.list.emilyWilson'),
                date: '25 Jan 2025',
                category: t('transactions.list.categories.transfer'),
                card: '**** 1234',
                status: t('transactions.list.status.completed'),
                amount: '+$780',
              },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="weeklyActivity" />
        <LayoutBlock>
          <ChartPie
            valuePrefix="$"
            width={320}
            height={320}
            data={[
              { name: t('charts.mon'), value: 21000 },
              { name: t('charts.tue'), value: 12000 },
              { name: t('charts.wed'), value: 8500 },
              { name: t('charts.thu'), value: 3200 },
              { name: t('charts.fri'), value: 6200 },
              { name: t('charts.sat'), value: 5400 },
              { name: t('charts.sun'), value: 3400 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="debitCreditOverview" />
        <LayoutBlock></LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="invoicesSent" />
        <LayoutBlock>
          <TransactionsList
            transactions={[
              {
                icon: <Icons.IconLogoApple />,
                title: t('transactions.list.appleMusic'),
                date: `${t('transactions.list.time.hours.one')} ${t('transactions.list.time.ago')}`,
                amount: '$1450',
              },
              {
                icon: <Icons.IconUser />,
                title: t('transactions.list.michael'),
                date: `${t('transactions.list.time.hours.two')} ${t('transactions.list.time.ago')}`,
                amount: '$700',
              },
              {
                icon: <Icons.IconLogoAmazon />,
                title: t('transactions.list.amazonShopping'),
                date: `${t('transactions.list.time.hours.three')} ${t('transactions.list.time.ago')}`,
                amount: '$895',
              },
              {
                icon: <Icons.IconLogoGoogle />,
                title: t('transactions.list.googlePlay'),
                date: `${t('transactions.list.time.hours.five')} ${t('transactions.list.time.ago')}`,
                amount: '$3610',
              },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

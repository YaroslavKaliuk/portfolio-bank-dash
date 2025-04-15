'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutRow, LayoutBlock } from '@/layouts';
import {
  ChartPie,
  ChartVerticalComposed,
  FinancialOverview,
  Title,
  TransactionsList,
} from '@/components';
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
        <Title title={t('titles.savingsStatistics')} />
        <LayoutBlock>
          <ChartVerticalComposed
            legendIncomeText={t('charts.income')}
            legendExpensesText={t('charts.expenses')}
            legendSavingsText={t('charts.savings')}
            data={[
              { month: t('charts.jan'), income: 120000, expenses: 85000, savings: 35000 },
              { month: t('charts.feb'), income: 90000, expenses: 110000, savings: 15000 },
              { month: t('charts.mar'), income: 130000, expenses: 75000, savings: 70000 },
              { month: t('charts.apr'), income: 115000, expenses: 105000, savings: 80000 },
              { month: t('charts.may'), income: 95000, expenses: 120000, savings: 55000 },
              { month: t('charts.jun'), income: 150000, expenses: 80000, savings: 125000 },
              { month: t('charts.jul'), income: 100000, expenses: 95000, savings: 130000 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>

      <LayoutRow>
        <Title title={t('titles.weeklyActivity')} />
        <LayoutBlock>
          <ChartPie
            data={[
              { name: t('charts.monday'), value: 21000 },
              { name: t('charts.tuesday'), value: 12000 },
              { name: t('charts.wednesday'), value: 8500 },
              { name: t('charts.thursday'), value: 3200 },
              { name: t('charts.friday'), value: 6200 },
              { name: t('charts.saturday'), value: 5400 },
              { name: t('charts.sunday'), value: 3400 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>

      <LayoutRow>
        <Title title={t('titles.lastTransactions')} />
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
        <Title title={t('titles.invoicesSent')} />
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
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

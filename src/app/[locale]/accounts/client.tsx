'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutRow, LayoutBlock } from '@/layouts';
import {
  ChartPie,
  ChartVerticalComposed,
  FinancialOverview,
  ServicesList,
  Title,
  TransactionsList,
  Button,
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
      <LayoutRow isGridColumnFull>
        <Title title={t('titles.bankServicesList')} />
        <ServicesList
          rows={[
            [
              { icon: <Icons.IconExpense /> },
              {
                title: t('services.checkingAccounts.title'),
                value: t('services.checkingAccounts.value'),
              },
              {
                title: t('services.checkingAccounts.noFees'),
                value: t('services.checkingAccounts.noFeesValue'),
              },
              {
                title: t('services.checkingAccounts.access'),
                value: t('services.checkingAccounts.accessValue'),
              },
              {
                title: t('services.checkingAccounts.security'),
                value: t('services.checkingAccounts.securityValue'),
              },
              { button: <Button title={t('services.checkingAccounts.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconSaving /> },
              {
                title: t('services.savingsAccounts.title'),
                value: t('services.savingsAccounts.value'),
              },
              {
                title: t('services.savingsAccounts.interest'),
                value: t('services.savingsAccounts.interestValue'),
              },
              {
                title: t('services.savingsAccounts.withdrawals'),
                value: t('services.savingsAccounts.withdrawalsValue'),
              },
              {
                title: t('services.savingsAccounts.fees'),
                value: t('services.savingsAccounts.feesValue'),
              },
              { button: <Button title={t('services.savingsAccounts.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconLoan /> },
              {
                title: t('services.businessLoans.title'),
                value: t('services.businessLoans.value'),
              },
              {
                title: t('services.businessLoans.rates'),
                value: t('services.businessLoans.ratesValue'),
              },
              {
                title: t('services.businessLoans.approval'),
                value: t('services.businessLoans.approvalValue'),
              },
              {
                title: t('services.businessLoans.solutions'),
                value: t('services.businessLoans.solutionsValue'),
              },
              { button: <Button title={t('services.businessLoans.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconCreditCard /> },
              {
                title: t('services.debitCreditCards.title'),
                value: t('services.debitCreditCards.value'),
              },
              {
                title: t('services.debitCreditCards.cashback'),
                value: t('services.debitCreditCards.cashbackValue'),
              },
              {
                title: t('services.debitCreditCards.global'),
                value: t('services.debitCreditCards.globalValue'),
              },
              {
                title: t('services.debitCreditCards.protection'),
                value: t('services.debitCreditCards.protectionValue'),
              },
              { button: <Button title={t('services.debitCreditCards.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconSafety /> },
              {
                title: t('services.lifeInsurance.title'),
                value: t('services.lifeInsurance.value'),
              },
              {
                title: t('services.lifeInsurance.plans'),
                value: t('services.lifeInsurance.plansValue'),
              },
              {
                title: t('services.lifeInsurance.premiums'),
                value: t('services.lifeInsurance.premiumsValue'),
              },
              {
                title: t('services.lifeInsurance.protection'),
                value: t('services.lifeInsurance.protectionValue'),
              },
              { button: <Button title={t('services.lifeInsurance.button')} isOutline /> },
            ],
          ]}
        />
      </LayoutRow>
    </>
  );
}

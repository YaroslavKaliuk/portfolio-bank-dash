'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { FinancialOverview, ServicesList, Button, Title, TransactionsList } from '@/components';
import * as Icons from '@/icons';

export default function ServicesClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconLifeInsurance />}
            title={t('financialOverview.lifeInsurance')}
            value={t('financialOverview.unlimitedProtection')}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconShopping />}
            title={t('financialOverview.shopping')}
            value={t('financialOverview.buyThinkGrow')}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconSafety />}
            title={t('financialOverview.safety')}
            value={t('financialOverview.weAreYourAllies')}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
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

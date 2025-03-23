'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutRow, LayoutBox } from '@/layouts';
import { CreditCard, FinancialOverview, Title, Transactions, Graph } from '@/components';
import * as Icons from '@/icons';

export default function AccountsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconSaving />}
            title={t('financialOverview.myBalance')}
            value={'$12,750'}
          />
        </LayoutBox>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconLoan />}
            title={t('financialOverview.income')}
            value={'$5,600'}
          />
        </LayoutBox>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconExpense />}
            title={t('financialOverview.expense')}
            value={'$3,460'}
          />
        </LayoutBox>
      </LayoutRow>

      <LayoutRow>
        <Title title="Last Transactions" />
        <LayoutBox>
          <Transactions
            transactions={[
              {
                icon: <Icons.IconService />,
                title: 'Mobile Service',
                date: '25 Jan 2025',
                category: 'Service',
                card: '**** 1234',
                status: 'Completed',
                amount: '-$150',
              },
              {
                icon: <Icons.IconLogoSpotify />,
                title: 'Spotify Subscription',
                date: '25 Jan 2025',
                category: 'Shopping',
                card: '**** 1234',
                status: 'Pending',
                amount: '-$150',
              },
              {
                icon: <Icons.IconUser />,
                title: 'Emily Wilson',
                date: '25 Jan 2025',
                category: 'Transfer',
                card: '**** 1234',
                status: 'Completed',
                amount: '+$780',
              },
            ]}
          />
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="My Card" />
        <CreditCard
          cards={[
            {
              balanceValue: '$5,756',
              number: '3778 **** **** 1234',
              validThruDate: '12/29',
              holderName: 'Charlene Reed',
            },
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="Debit & Credit Overview" />
        <LayoutBox>
          <Graph>
            <Icons.IconGraphDebitCreditOverview />
          </Graph>
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Invoices Sent" />
        <LayoutBox>
          <Transactions
            transactions={[
              {
                icon: <Icons.IconLogoApple />,
                title: 'Apple Music',
                date: '1h ago',
                amount: '$1450',
              },
              {
                icon: <Icons.IconUser />,
                title: 'Michael',
                date: '2h ago',
                amount: '$700',
              },
              {
                icon: <Icons.IconLogoAmazon />,
                title: 'Amazon Shopping',
                date: '3h ago',
                amount: '$895',
              },
              {
                icon: <Icons.IconLogoGoogle />,
                title: 'Google Play',
                date: '5h ago',
                amount: '$3610',
              },
            ]}
          />
        </LayoutBox>
      </LayoutRow>
    </>
  );
}

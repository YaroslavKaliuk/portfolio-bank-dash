'use client';

import React from 'react';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { CreditCard, Title, Transactions, Graph } from '@/components';
import * as Icons from '@/icons';

export default function DashboardClient() {
  return (
    <>
      <LayoutRow>
        <Title title="My Cards" />
        <CreditCard
          cards={[
            {
              balanceValue: '$8,432',
              number: '3778 **** **** 4567',
              validThruDate: '10/29',
              holderName: 'Charlene Reed',
              isDark: true,
            },
            {
              balanceValue: '$15,084',
              number: '3778 **** **** 8912',
              validThruDate: '04/30',
              holderName: 'Charlene Reed',
              isLight: true,
            },
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="Recent Transaction" />
        <LayoutBlock>
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
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Weekly Activity" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphWeeklyActivity />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Expense Statistics" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphExpenseStatistics />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Balance History" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphBalanceHistory />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Quick Transfer" />
        <LayoutBlock>Carousel</LayoutBlock>
      </LayoutRow>
    </>
  );
}

'use client';

import React from 'react';
import { LayoutBox, LayoutRow } from '@/layouts';
import { CreditCard, Graph, Title } from '@/components';
import * as Icons from '@/icons';

export default function CreditCardsClient() {
  return (
    <>
      <LayoutRow isGridColumnFull>
        <CreditCard
          cards={[
            {
              balanceValue: '$5,756',
              number: '3778 **** **** 1234',
              validThruDate: '12/29',
              holderName: 'Charlene Reed',
            },
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
        <Title title="Card List" />
        <LayoutBox>Component</LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Card Expense Statistics" />
        <LayoutBox>
          <Graph>
            <Icons.IconGraphCardExpenseStatistics />
          </Graph>
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Add New Card" />
        <LayoutBox>Component</LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Card Setting" />
        <LayoutBox>Component</LayoutBox>
      </LayoutRow>
    </>
  );
}

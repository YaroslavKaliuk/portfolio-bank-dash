'use client';

import React from 'react';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { BankServicesList, Button, CreditCard, Graph, Title, FormAddNewCard } from '@/components';
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
        <BankServicesList
          rows={[
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Card Type', value: 'Secondary' },
              { title: 'Bank', value: 'DBL Bank' },
              { title: 'Card Number', value: '**** 5600' },
              { title: 'Holder Name', value: 'William' },
              { button: <Button title="View Details" isOutline /> },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Card Type', value: 'Primary' },
              { title: 'Bank', value: 'Global Bank' },
              { title: 'Card Number', value: '**** 1234' },
              { title: 'Holder Name', value: 'Emma' },
              { button: <Button title="View Details" isOutline /> },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Card Type', value: 'Secondary' },
              { title: 'Bank', value: 'City Bank' },
              { title: 'Card Number', value: '**** 9876' },
              { title: 'Holder Name', value: 'James' },
              { button: <Button title="View Details" isOutline /> },
            ],
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="Card Expense Statistics" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphCardExpenseStatistics />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Add New Card" />
        <LayoutBlock>
          <FormAddNewCard />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Card Setting" />
        <BankServicesList
          rows={[
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Block Card', value: 'Instantly block your card' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Order New Card', value: 'Request a replacement card' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Change PIN', value: 'Set a new PIN for your card' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Report Lost Card', value: 'Report your card as lost' },
            ],
          ]}
        />
      </LayoutRow>
    </>
  );
}

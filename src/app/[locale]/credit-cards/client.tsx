'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { ServicesList, Button, CreditCard, Graph, Title, FormAddNewCard } from '@/components';
import * as Icons from '@/icons';

export default function CreditCardsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isGridColumnFull>
        <CreditCard
          cards={[
            {
              balanceTitle: t('creditCard.balanceTitle'),
              balanceValue: t('creditCard.firstCard.balanceValue'),
              validThruTitle: t('creditCard.validThruTitle'),
              validThruDate: t('creditCard.firstCard.validThruDate'),
              holderTitle: t('creditCard.holderTitle'),
              holderName: t('creditCard.firstCard.holderName'),
              number: t('creditCard.firstCard.number'),
            },
            {
              balanceTitle: t('creditCard.balanceTitle'),
              balanceValue: t('creditCard.secondCard.balanceValue'),
              validThruTitle: t('creditCard.validThruTitle'),
              validThruDate: t('creditCard.secondCard.validThruDate'),
              holderTitle: t('creditCard.holderTitle'),
              holderName: t('creditCard.secondCard.holderName'),
              number: t('creditCard.secondCard.number'),
              isLight: true,
            },
            {
              balanceTitle: t('creditCard.balanceTitle'),
              balanceValue: t('creditCard.thirdCard.balanceValue'),
              validThruTitle: t('creditCard.validThruTitle'),
              validThruDate: t('creditCard.thirdCard.validThruDate'),
              holderTitle: t('creditCard.holderTitle'),
              holderName: t('creditCard.thirdCard.holderName'),
              number: t('creditCard.thirdCard.number'),
              isDark: true,
            },
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="cardList" />
        <ServicesList
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
        <Title title="cardExpenseStatistics" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphCardExpenseStatistics />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="addNewCard" />
        <LayoutBlock>
          <FormAddNewCard />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="cardSetting" />
        <ServicesList
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

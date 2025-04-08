'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { ServicesList, Button, CreditCard, Title, FormAddNewCard, ChartPie } from '@/components';
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
              { icon: <Icons.IconCreditCard /> },
              {
                title: t('creditCards.list.cardType'),
                value: t('creditCards.list.types.secondary'),
              },
              { title: t('creditCards.list.bank'), value: 'DBL Bank' },
              { title: t('creditCards.list.cardNumber'), value: '**** 5600' },
              { title: t('creditCards.list.holderName'), value: 'William' },
              { button: <Button title={t('creditCards.list.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconCreditCard /> },
              { title: t('creditCards.list.cardType'), value: t('creditCards.list.types.primary') },
              { title: t('creditCards.list.bank'), value: 'Global Bank' },
              { title: t('creditCards.list.cardNumber'), value: '**** 1234' },
              { title: t('creditCards.list.holderName'), value: 'Emma' },
              { button: <Button title={t('creditCards.list.button')} isOutline /> },
            ],
            [
              { icon: <Icons.IconCreditCard /> },
              {
                title: t('creditCards.list.cardType'),
                value: t('creditCards.list.types.secondary'),
              },
              { title: t('creditCards.list.bank'), value: 'City Bank' },
              { title: t('creditCards.list.cardNumber'), value: '**** 9876' },
              { title: t('creditCards.list.holderName'), value: 'James' },
              { button: <Button title={t('creditCards.list.button')} isOutline /> },
            ],
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="cardExpenseStatistics" />
        <LayoutBlock>
          <ChartPie
            strokeWidth={8}
            innerRadius={16}
            showLegend={false}
            outerSectorGap={0}
            outerSectorWidth={12}
            showValue={false}
            data={[
              { name: 'Chase Bank', value: 1000 },
              { name: 'Citibank', value: 1000 },
              { name: 'PNC Bank', value: 1000 },
              { name: 'TD Bank', value: 1000 },
            ]}
          />
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
              { icon: <Icons.IconMoney /> },
              {
                title: t('creditCards.actions.blockCard.title'),
                value: t('creditCards.actions.blockCard.value'),
              },
            ],
            [
              { icon: <Icons.IconLoan /> },
              {
                title: t('creditCards.actions.orderNewCard.title'),
                value: t('creditCards.actions.orderNewCard.value'),
              },
            ],
            [
              { icon: <Icons.IconSafety /> },
              {
                title: t('creditCards.actions.changePin.title'),
                value: t('creditCards.actions.changePin.value'),
              },
            ],
            [
              { icon: <Icons.IconExpense /> },
              {
                title: t('creditCards.actions.reportLostCard.title'),
                value: t('creditCards.actions.reportLostCard.value'),
              },
            ],
          ]}
        />
      </LayoutRow>
    </>
  );
}

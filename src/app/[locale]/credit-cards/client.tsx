'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import {
  ServicesList,
  Button,
  CreditCard,
  Title,
  FormAddNewCard,
  ChartPie,
  ChartBar,
} from '@/components';
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
        <Title title={t('titles.debitCreditOverview')} />
        <LayoutBlock>
          <ChartBar
            type="double"
            height={320}
            showLegend={true}
            config={[
              {
                dataKey: 'value1',
                name: t('charts.debit'),
                gradientId: 'barGradient1',
                colors: ['var(--accent-purple)', 'var(--accent-blue)'],
                radius: [8, 8, 0, 0],
                stackId: 'a',
              },
              {
                dataKey: 'value2',
                name: t('charts.credit'),
                gradientId: 'barGradient2',
                colors: ['var(--accent-green)', 'var(--accent-teal)'],
                radius: [8, 8, 0, 0],
                stackId: 'b',
              },
            ]}
            data={[
              { name: t('charts.mon'), value1: 4000, value2: 3000 },
              { name: t('charts.tue'), value1: 3000, value2: 2000 },
              { name: t('charts.wed'), value1: 2000, value2: 2780 },
              { name: t('charts.thu'), value1: 2780, value2: 1890 },
              { name: t('charts.fri'), value1: 1890, value2: 2390 },
              { name: t('charts.sat'), value1: 2390, value2: 3490 },
              { name: t('charts.sun'), value1: 3490, value2: 3490 },
            ]}
            summary={[
              { name: t('charts.total'), value: '$21,550' },
              { name: t('charts.averageDaily'), value: '$3,078' },
            ]}
          />
        </LayoutBlock>

        {/* <ServicesList
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
        /> */}
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.cardBalance')} />
        <LayoutBlock>
          <ChartPie
            strokeWidth={8}
            innerRadius={16}
            showLegend={false}
            outerSectorGap={0}
            outerSectorWidth={12}
            showValue={false}
            showLabels={true}
            data={[
              { name: '**** 8912', value: 1500 },
              { name: '**** 1234', value: 800 },
              { name: '**** 4567', value: 950 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.addNewCard')} />
        <LayoutBlock>
          <FormAddNewCard />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.cardSetting')} />
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

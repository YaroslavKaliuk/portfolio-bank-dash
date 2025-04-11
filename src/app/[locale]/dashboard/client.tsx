'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import {
  CreditCard,
  Title,
  SwiperSlider,
  QuickTransfer,
  TransactionsList,
  ChartPie,
  ChartBar,
} from '@/components';
import * as Icons from '@/icons';
import Image from 'next/image';

export default function DashboardClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow>
        <Title title={t('titles.myCards')} />
        <CreditCard
          cards={[
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
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.promo')} />
        <SwiperSlider
          items={[
            <Image src="/banner_2.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
            <Image src="/banner_1.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.weeklyActivity')} />
        <LayoutBlock>
          <ChartBar
            type="tiny"
            legendText={t('charts.spent')}
            showLegend={false}
            data={[
              { name: t('charts.mon'), value: 4000 },
              { name: t('charts.tue'), value: 3000 },
              { name: t('charts.wed'), value: 2000 },
              { name: t('charts.thu'), value: 2780 },
              { name: t('charts.fri'), value: 1890 },
              { name: t('charts.sat'), value: 2390 },
              { name: t('charts.sun'), value: 3490 },
            ]}
            summary={[
              { name: t('charts.total'), value: '$21,550' },
              { name: t('charts.averageDaily'), value: '$3,078' },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.topExpenses')} />
        <LayoutBlock>
          <ChartPie
            isSemiCircle
            startAngle={180}
            endAngle={0}
            cy="100%"
            height={168}
            data={[
              { name: t('charts.employeeSalaries'), value: 21000 },
              { name: t('charts.officeRent'), value: 12000 },
              { name: t('charts.digitalMarketing'), value: 8500 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.quickTransfer')} />
        <LayoutBlock>
          <QuickTransfer
            items={[
              {
                image: (
                  <Image src="/user_3.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Evan Fox',
                text: 'PM',
              },
              {
                image: (
                  <Image src="/user_7.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Lia Tan',
                text: 'CEO',
              },
              {
                image: (
                  <Image src="/user_4.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Maxwell Doe',
                text: 'CTO',
              },
              {
                image: (
                  <Image src="/user_1.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Alexandra Lee',
                text: 'HR Manager',
              },
              {
                image: (
                  <Image src="/user_5.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Tim Wu',
                text: 'DevOps',
              },
              {
                image: (
                  <Image src="/user_2.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Laura Smith',
                text: 'QA Engineer',
              },
              {
                image: (
                  <Image src="/user_6.jpg" alt="User" width={100} height={100} loading="lazy" />
                ),
                title: 'Dan Knutson',
                text: 'Designer',
              },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.recentTransactions')} />
        <LayoutBlock>
          <TransactionsList
            transactions={[
              {
                icon: <Icons.IconLogoApple />,
                title: t('transactions.list.appleMusic'),
                date: `${t('transactions.list.time.hours.one')} ${t('transactions.list.time.ago')}`,
                amount: '$1,450',
              },
              {
                icon: <Icons.IconUser />,
                title: t('transactions.list.michael'),
                date: `${t('transactions.list.time.hours.two')} ${t('transactions.list.time.ago')}`,
                amount: '$2,700',
              },
              {
                icon: <Icons.IconLogoAmazon />,
                title: t('transactions.list.amazonShopping'),
                date: `${t('transactions.list.time.hours.three')} ${t('transactions.list.time.ago')}`,
                amount: '$3,895',
              },
              {
                icon: <Icons.IconService />,
                title: t('transactions.list.mobileService'),
                date: `${t('transactions.list.time.hours.one')} ${t('transactions.list.time.ago')}`,
                amount: '$1,450',
              },
              {
                icon: <Icons.IconLogoGoogle />,
                title: t('transactions.list.googlePlay'),
                date: `${t('transactions.list.time.hours.two')} ${t('transactions.list.time.ago')}`,
                amount: '$5,700',
              },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

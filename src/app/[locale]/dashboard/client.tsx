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
        <Title title="myCards" />
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
        <Title title="promo" />
        <SwiperSlider
          items={[
            <Image src="/banner_2.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
            <Image src="/banner_1.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="quickTransfer" />
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
      <LayoutRow isChartExpenseStatistics>
        <Title title="expenseStatistics" />
        <LayoutBlock>
          <ChartPie
            data={[
              { name: 'Employee Salaries', value: 21000 },
              { name: 'Office Rent', value: 12000 },
              { name: 'Digital Marketing', value: 8500 },
              { name: 'Software Subscriptions', value: 3200 },
              { name: 'Business Travel', value: 6200 },
              { name: 'Equipment & Hardware', value: 5400 },
              { name: 'Legal Services', value: 3400 },
              { name: 'Employee Training', value: 3100 },
              { name: 'Miscellaneous', value: 1500 },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="weeklyActivity" />
        <LayoutBlock>
          <ChartBar
            data={[
              { name: 'Mon', value: 4000 },
              { name: 'Tue', value: 3000 },
              { name: 'Wed', value: 2000 },
              { name: 'Thu', value: 2780 },
              { name: 'Fri', value: 1890 },
              { name: 'Sat', value: 2390 },
              { name: 'Sun', value: 3490 },
            ]}
            summary={[
              { name: 'Total:', value: '$21,550' },
              { name: 'Average Daily:', value: '$3,078' },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      {/* <LayoutRow>
        <Title title="recentTransaction" />
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
            ]}
          />
        </LayoutBlock>
      </LayoutRow> */}
    </>
  );
}

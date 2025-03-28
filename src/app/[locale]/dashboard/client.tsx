'use client';

import React from 'react';
import { LayoutBlock, LayoutRow } from '@/layouts';
import {
  CreditCard,
  Title,
  Graph,
  SwiperSlider,
  QuickTransfer,
  TransactionsList,
} from '@/components';
import * as Icons from '@/icons';
import Image from 'next/image';

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
        <Title title="Promo" />
        <SwiperSlider
          items={[
            <Image src="/banner_2.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
            <Image src="/banner_1.jpg" alt="Promo" width={860} height={486} loading="lazy" />,
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title="Quick Transfer" />
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
        <Title title="Expense Statistics" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphExpenseStatistics />
          </Graph>
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
        <Title title="Recent Transaction" />
        <LayoutBlock>
          <TransactionsList
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
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

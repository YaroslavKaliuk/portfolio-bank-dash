'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import {
  FinancialOverview,
  ServicesList,
  Button,
  Title,
  SwiperSlider,
  FormPromo,
  Accordion,
} from '@/components';
import * as Icons from '@/icons';
import Image from 'next/image';

export default function ServicesClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow>
        <SwiperSlider
          items={[
            <Image
              key="banner2"
              src="/banner_2.jpg"
              alt="Promo"
              width={860}
              height={486}
              loading="lazy"
            />,
            <Image
              key="banner1"
              src="/banner_1.jpg"
              alt="Promo"
              width={860}
              height={486}
              loading="lazy"
            />,
          ]}
        />
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.onlineCardApplication')} />
        <LayoutBlock>
          <FormPromo />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow isFinancialOverview>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconLifeInsurance />}
            title={t('financialOverview.lifeInsurance')}
            value={t('financialOverview.unlimitedProtection')}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconShopping />}
            title={t('financialOverview.shopping')}
            value={t('financialOverview.buyThinkGrow')}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconSafety />}
            title={t('financialOverview.safety')}
            value={t('financialOverview.weAreYourAllies')}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow isGridColumnFull>
        <Title title={t('titles.bankServicesList')} />
        <ServicesList
          rows={[
            [
              { icon: <Icons.IconExpense /> },
              {
                title: t('services.checkingAccounts.title'),
                value: t('services.checkingAccounts.value'),
              },
              {
                title: t('services.checkingAccounts.noFees'),
                value: t('services.checkingAccounts.noFeesValue'),
              },
              {
                title: t('services.checkingAccounts.access'),
                value: t('services.checkingAccounts.accessValue'),
              },
              {
                title: t('services.checkingAccounts.security'),
                value: t('services.checkingAccounts.securityValue'),
              },
            ],
            [
              { icon: <Icons.IconSaving /> },
              {
                title: t('services.savingsAccounts.title'),
                value: t('services.savingsAccounts.value'),
              },
              {
                title: t('services.savingsAccounts.interest'),
                value: t('services.savingsAccounts.interestValue'),
              },
              {
                title: t('services.savingsAccounts.withdrawals'),
                value: t('services.savingsAccounts.withdrawalsValue'),
              },
              {
                title: t('services.savingsAccounts.fees'),
                value: t('services.savingsAccounts.feesValue'),
              },
            ],
            [
              { icon: <Icons.IconLoan /> },
              {
                title: t('services.businessLoans.title'),
                value: t('services.businessLoans.value'),
              },
              {
                title: t('services.businessLoans.rates'),
                value: t('services.businessLoans.ratesValue'),
              },
              {
                title: t('services.businessLoans.approval'),
                value: t('services.businessLoans.approvalValue'),
              },
              {
                title: t('services.businessLoans.solutions'),
                value: t('services.businessLoans.solutionsValue'),
              },
            ],
            [
              { icon: <Icons.IconCreditCard /> },
              {
                title: t('services.debitCreditCards.title'),
                value: t('services.debitCreditCards.value'),
              },
              {
                title: t('services.debitCreditCards.cashback'),
                value: t('services.debitCreditCards.cashbackValue'),
              },
              {
                title: t('services.debitCreditCards.global'),
                value: t('services.debitCreditCards.globalValue'),
              },
              {
                title: t('services.debitCreditCards.protection'),
                value: t('services.debitCreditCards.protectionValue'),
              },
            ],
            [
              { icon: <Icons.IconSafety /> },
              {
                title: t('services.lifeInsurance.title'),
                value: t('services.lifeInsurance.value'),
              },
              {
                title: t('services.lifeInsurance.plans'),
                value: t('services.lifeInsurance.plansValue'),
              },
              {
                title: t('services.lifeInsurance.premiums'),
                value: t('services.lifeInsurance.premiumsValue'),
              },
              {
                title: t('services.lifeInsurance.protection'),
                value: t('services.lifeInsurance.protectionValue'),
              },
            ],
          ]}
        />
      </LayoutRow>
      <LayoutRow isGridColumnFull>
        <Title title={t('titles.bankPromotionsSpecialOffers')} />
        <LayoutBlock>
          <Accordion
            items={[
              {
                title: t('accordion.title1'),
                content: t('accordion.content1'),
              },
              {
                title: t('accordion.title2'),
                content: t('accordion.content2'),
              },
              {
                title: t('accordion.title3'),
                content: t('accordion.content3'),
              },
              {
                title: t('accordion.title4'),
                content: t('accordion.content4'),
              },
              {
                title: t('accordion.title5'),
                content: t('accordion.content5'),
              },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

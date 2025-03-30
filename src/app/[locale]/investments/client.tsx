'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { Table, ServicesList, FinancialOverview, Graph, Title } from '@/components';
import * as Icons from '@/icons';

export default function InvestmentsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconMoney />}
            title={t('financialOverview.totalInvestedAmount')}
            value={'$150,000'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconNumberOfInvestments />}
            title={t('financialOverview.numberOfInvestments')}
            value={'1,250'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconRateOfReturn />}
            title={t('financialOverview.rateOfReturn')}
            value={'+5.80%'}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="investmentMapping" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphInvestmentMapping />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="trendingStock" />
        <LayoutBlock>
          <Table
            thead={[
              [
                { th: t('table.number') },
                { th: t('table.name') },
                { th: t('table.price') },
                { th: t('table.return') },
              ],
            ]}
            tbody={[
              [{ td: 'Canon' }, { td: '$520' }, { td: '+5%' }],
              [{ td: 'Tesla' }, { td: '$750' }, { td: '-8%' }],
              [{ td: 'Apple' }, { td: '$1500' }, { td: '+12%' }],
              [{ td: 'Nike' }, { td: '$110' }, { td: '+3%' }],
              [{ td: 'Amazon' }, { td: '$3400' }, { td: '-6%' }],
              [{ td: 'Samsung' }, { td: '$1600' }, { td: '+4%' }],
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow isGridColumnFull>
        <Title title="myInvestment" />
        <ServicesList
          rows={[
            [
              { icon: <Icons.IconLogoApple /> },
              { title: 'Apple Store', value: t('investments.list.types.ecommerce') },
              { title: '$54,000', value: t('investments.list.investmentValue') },
              { title: '12 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.medium'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Tech', value: t('investments.list.industry') },
              { title: '+16%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoAmazon /> },
              { title: 'Amazon', value: t('investments.list.types.ecommerce') },
              { title: '$72,000', value: t('investments.list.investmentValue') },
              { title: '24 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.high'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Tech', value: t('investments.list.industry') },
              { title: '-22%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoDigg /> },
              { title: 'Digg', value: t('investments.list.types.automotive') },
              { title: '$120,000', value: t('investments.list.investmentValue') },
              { title: '36 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.high'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Automotive', value: t('investments.list.industry') },
              { title: '+35%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoSlack /> },
              { title: 'Slack', value: t('investments.list.types.entertainment') },
              { title: '$45,000', value: t('investments.list.investmentValue') },
              { title: '18 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.medium'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Media', value: t('investments.list.industry') },
              { title: '-12%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoGoogle /> },
              { title: 'Google', value: t('investments.list.types.tech') },
              { title: '$90,000', value: t('investments.list.investmentValue') },
              { title: '24 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.low'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Tech', value: t('investments.list.industry') },
              { title: '-18%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoYahoo /> },
              { title: 'Yahoo', value: t('investments.list.types.software') },
              { title: '$85,000', value: t('investments.list.investmentValue') },
              { title: '24 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.low'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Tech', value: t('investments.list.industry') },
              { title: '+20%', value: t('investments.list.returnValue') },
            ],
            [
              { icon: <Icons.IconLogoSpotify /> },
              { title: 'Spotify', value: t('investments.list.types.socialMedia') },
              { title: '$60,000', value: t('investments.list.investmentValue') },
              { title: '12 Months', value: t('investments.list.investmentPeriod') },
              {
                title: t('investments.list.riskLevels.medium'),
                value: t('investments.list.riskLevel'),
              },
              { title: 'Tech', value: t('investments.list.industry') },
              { title: '+15%', value: t('investments.list.returnValue') },
            ],
          ]}
        />
      </LayoutRow>
    </>
  );
}

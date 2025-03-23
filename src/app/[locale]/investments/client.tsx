'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import {
  ActiveLoansOverview,
  BankServicesList,
  FinancialOverview,
  Graph,
  Title,
} from '@/components';
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
        <Title title="Yearly Total Investment" />
        <LayoutBlock>
          <Graph>
            <Icons.IconGraphYearlyTotalInvestment />
          </Graph>
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title="Trending Stock" />
        <LayoutBlock>
          <ActiveLoansOverview
            thead={[[{ th: '#' }, { th: 'Name' }, { th: 'Price' }, { th: 'Return' }]]}
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
        <Title title="My Investment" />
        <BankServicesList
          rows={[
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Apple Store', value: 'E-commerce, Marketplace' },
              { title: '$54,000', value: 'Investment Value' },
              { title: '12 Months', value: 'Investment Period' },
              { title: 'Medium', value: 'Risk Level' },
              { title: 'Tech', value: 'Industry' },
              { title: '+16%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Amazon', value: 'E-commerce, Marketplace' },
              { title: '$72,000', value: 'Investment Value' },
              { title: '24 Months', value: 'Investment Period' },
              { title: 'High', value: 'Risk Level' },
              { title: 'Tech', value: 'Industry' },
              { title: '-22%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Tesla', value: 'Automotive, Energy' },
              { title: '$120,000', value: 'Investment Value' },
              { title: '36 Months', value: 'Investment Period' },
              { title: 'High', value: 'Risk Level' },
              { title: 'Automotive', value: 'Industry' },
              { title: '+35%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Netflix', value: 'Entertainment, Streaming' },
              { title: '$45,000', value: 'Investment Value' },
              { title: '18 Months', value: 'Investment Period' },
              { title: 'Medium', value: 'Risk Level' },
              { title: 'Media', value: 'Industry' },
              { title: '-12%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Google', value: 'Tech, Advertising' },
              { title: '$90,000', value: 'Investment Value' },
              { title: '24 Months', value: 'Investment Period' },
              { title: 'Low', value: 'Risk Level' },
              { title: 'Tech', value: 'Industry' },
              { title: '-18%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Microsoft', value: 'Tech, Software' },
              { title: '$85,000', value: 'Investment Value' },
              { title: '24 Months', value: 'Investment Period' },
              { title: 'Low', value: 'Risk Level' },
              { title: 'Tech', value: 'Industry' },
              { title: '+20%', value: 'Return Value' },
            ],
            [
              { icon: <Icons.IconExpense /> },
              { title: 'Meta', value: 'Tech, Social Media' },
              { title: '$60,000', value: 'Investment Value' },
              { title: '12 Months', value: 'Investment Period' },
              { title: 'Medium', value: 'Risk Level' },
              { title: 'Tech', value: 'Industry' },
              { title: '+15%', value: 'Return Value' },
            ],
          ]}
        />
      </LayoutRow>
    </>
  );
}

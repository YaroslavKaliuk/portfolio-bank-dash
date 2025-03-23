'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBox, LayoutRow } from '@/layouts';
import { ActiveLoansOverview, FinancialOverview, Graph, Title } from '@/components';
import * as Icons from '@/icons';

export default function InvestmentsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconMoney />}
            title={t('financialOverview.totalInvestedAmount')}
            value={'$150,000'}
          />
        </LayoutBox>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconNumberOfInvestments />}
            title={t('financialOverview.numberOfInvestments')}
            value={'1,250'}
          />
        </LayoutBox>
        <LayoutBox>
          <FinancialOverview
            icon={<Icons.IconRateOfReturn />}
            title={t('financialOverview.rateOfReturn')}
            value={'+5.80%'}
          />
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Yearly Total Investment" />
        <LayoutBox>
          <Graph>
            <Icons.IconGraphYearlyTotalInvestment />
          </Graph>
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="My Investment" />
        <LayoutBox>Component</LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Monthly Revenue" />
        <LayoutBox>
          <Graph>
            <Icons.IconGraphMonthlyRevenue />
          </Graph>
        </LayoutBox>
      </LayoutRow>
      <LayoutRow>
        <Title title="Trending Stock" />
        <LayoutBox>
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
        </LayoutBox>
      </LayoutRow>
    </>
  );
}

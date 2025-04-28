'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { Table, Button, FinancialOverview, Title } from '@/components';
import * as Icons from '@/icons';
import toast from 'react-hot-toast';

export default function LoansClient() {
  const t = useTranslations();

  const notify = () =>
    toast(t('toast.yourTransferHasBeenSent'), {
      icon: '✅',
    });

  return (
    <>
      <LayoutRow isFinancialOverview>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconUser />}
            title={t('financialOverview.personalLoans')}
            value={'$50,000'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconBriefcase />}
            title={t('financialOverview.corporateLoans')}
            value={'$100,000'}
          />
        </LayoutBlock>
        <LayoutBlock>
          <FinancialOverview
            icon={<Icons.IconGraph />}
            title={t('financialOverview.businessLoans')}
            value={'$500,000'}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow>
        <Title title={t('titles.activeLoansOverview')} />
        <LayoutBlock>
          <Table
            thead={[
              [
                { th: '#' },
                { th: t('table.loanMoney') },
                { th: t('table.leftToRepay') },
                { th: t('table.duration') },
                { th: t('table.interestRate') },
                { th: t('table.installment') },
                { th: t('table.repay') },
              ],
            ]}
            tbody={[
              [
                { td: '$100,000' },
                { td: '$40,500' },
                { td: '8 Months' },
                { td: '12%' },
                { td: '$2,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$150,000' },
                { td: '$60,000' },
                { td: '12 Months' },
                { td: '10%' },
                { td: '$5,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$200,000' },
                { td: '$120,000' },
                { td: '24 Months' },
                { td: '8%' },
                { td: '$8,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$80,000' },
                { td: '$30,000' },
                { td: '6 Months' },
                { td: '15%' },
                { td: '$3,500 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$120,000' },
                { td: '$70,000' },
                { td: '18 Months' },
                { td: '10%' },
                { td: '$4,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$50,000' },
                { td: '$20,000' },
                { td: '4 Months' },
                { td: '20%' },
                { td: '$5,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$90,000' },
                { td: '$45,000' },
                { td: '10 Months' },
                { td: '11%' },
                { td: '$4,500 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$110,000' },
                { td: '$55,000' },
                { td: '14 Months' },
                { td: '9%' },
                { td: '$6,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$160,000' },
                { td: '$80,000' },
                { td: '20 Months' },
                { td: '7%' },
                { td: '$7,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$75,000' },
                { td: '$35,000' },
                { td: '9 Months' },
                { td: '13%' },
                { td: '$3,800 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$130,000' },
                { td: '$60,000' },
                { td: '15 Months' },
                { td: '9%' },
                { td: '$5,200 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$170,000' },
                { td: '$90,000' },
                { td: '22 Months' },
                { td: '6%' },
                { td: '$7,500 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$85,000' },
                { td: '$40,000' },
                { td: '8 Months' },
                { td: '14%' },
                { td: '$4,200 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$95,000' },
                { td: '$55,000' },
                { td: '11 Months' },
                { td: '10%' },
                { td: '$5,500 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$140,000' },
                { td: '$70,000' },
                { td: '16 Months' },
                { td: '8%' },
                { td: '$6,800 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$160,000' },
                { td: '$100,000' },
                { td: '20 Months' },
                { td: '7%' },
                { td: '$8,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$50,000' },
                { td: '$25,000' },
                { td: '5 Months' },
                { td: '18%' },
                { td: '$4,200 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$120,000' },
                { td: '$50,000' },
                { td: '13 Months' },
                { td: '11%' },
                { td: '$6,000 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$170,000' },
                { td: '$85,000' },
                { td: '19 Months' },
                { td: '9%' },
                { td: '$7,800 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$130,000' },
                { td: '$65,000' },
                { td: '17 Months' },
                { td: '10%' },
                { td: '$6,400 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
              [
                { td: '$100,000' },
                { td: '$40,000' },
                { td: '7 Months' },
                { td: '15%' },
                { td: '$4,800 / month' },
                { button: <Button title={t('loans.button.repay')} isOutline onClick={notify} /> },
              ],
            ]}
            tfoot={[
              [
                { td: t('table.total') },
                { td: '$2,750,000' },
                { td: '$1,500,000' },
                { td: '' },
                { td: '' },
                { td: '' },
                { td: '' },
              ],
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

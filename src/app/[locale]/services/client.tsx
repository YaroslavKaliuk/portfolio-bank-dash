'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FinancialOverview, BankServicesList, Button, Title } from '@/components';
import * as Icons from '@/icons';

export default function ServicesClient() {
  const t = useTranslations();
  return (
    <>
      <FinancialOverview
        items={[
          {
            icon: <Icons.IconLifeInsurance />,
            title: 'Life Insurance',
            value: 'Unlimited Protection',
          },
          {
            icon: <Icons.IconShopping />,
            title: 'Shopping',
            value: 'Buy, Think, Grow',
          },
          {
            icon: <Icons.IconSafety />,
            title: 'Safety',
            value: 'We Are Your Allies',
          },
        ]}
      />
      <Title title="Bank Services List" />
      <BankServicesList
        rows={[
          [
            { icon: <Icons.IconExpense /> },
            { title: 'Checking Accounts', value: 'Easy Transactions' },
            { title: 'No Hidden Fees', value: 'Transparent Banking' },
            { title: '24/7 Access', value: 'Bank Anytime' },
            { title: 'Secure Payments', value: 'Safe & Reliable' },
            { button: <Button title="View Details" isOutline /> },
          ],
          [
            { icon: <Icons.IconSaving /> },
            { title: 'Savings Accounts', value: 'Grow Your Wealth' },
            { title: 'High Interest', value: 'Maximize Returns' },
            { title: 'Easy Withdrawals', value: 'Flexible Access' },
            { title: 'No Monthly Fees', value: 'Cost-Effective' },
            { button: <Button title="View Details" isOutline /> },
          ],
          [
            { icon: <Icons.IconLoan /> },
            { title: 'Business Loans', value: 'Expand Your Business' },
            { title: 'Low Interest Rates', value: 'Affordable Plans' },
            { title: 'Fast Approval', value: 'Quick Processing' },
            { title: 'Custom Solutions', value: 'Tailored Offers' },
            { button: <Button title="View Details" isOutline /> },
          ],
          [
            { icon: <Icons.IconCreditCard /> },
            { title: 'Debit and Credit Cards', value: 'Shop with Ease' },
            { title: 'Cashback Offers', value: 'Earn While You Spend' },
            { title: 'Global Acceptance', value: 'Use Anywhere' },
            { title: 'Fraud Protection', value: 'Shop Securely' },
            { button: <Button title="View Details" isOutline /> },
          ],
          [
            { icon: <Icons.IconSafety /> },
            { title: 'Life Insurance', value: 'Secure Your Future' },
            { title: 'Comprehensive Plans', value: 'Coverage for All' },
            { title: 'Affordable Premiums', value: 'Budget-Friendly' },
            { title: 'Family Protection', value: 'Peace of Mind' },
            { button: <Button title="View Details" isOutline /> },
          ],
        ]}
      />
    </>
  );
}

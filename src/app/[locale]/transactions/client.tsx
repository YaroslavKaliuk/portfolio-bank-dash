'use client';

import React from 'react';
import { LayoutBlock, LayoutRow } from '@/layouts';
import { Title, Button, Table, ChartBar } from '@/components';
import { useTranslations } from 'next-intl';

export default function TransactionsClient() {
  const t = useTranslations();
  return (
    <>
      <LayoutRow isGridColumnFull>
        <Title title={t('titles.myExpense')} />
        <LayoutBlock>
          <ChartBar
            type="composed"
            showLegend
            config={[
              {
                dataKey: 'expenses',
                name: t('charts.expenses'),
                gradientId: 'expensesGradient',
                colors: ['var(--color-accent-red)', 'var(--color-accent-pink)'],
                radius: [0, 0, 0, 0],
                stackId: 'a',
              },
              {
                dataKey: 'income',
                name: t('charts.income'),
                gradientId: 'incomeGradient',
                colors: ['var(--color-accent-green)', 'var(--color-accent-teal)'],
                radius: [8, 8, 0, 0],
                stackId: 'a',
              },
            ]}
            data={[
              { name: t('charts.jan'), income: 12000, expenses: 8000 },
              { name: t('charts.feb'), income: 10000, expenses: 7000 },
              { name: t('charts.mar'), income: 14000, expenses: 9000 },
              { name: t('charts.apr'), income: 9000, expenses: 6000 },
              { name: t('charts.may'), income: 15000, expenses: 9500 },
              { name: t('charts.jun'), income: 11000, expenses: 5000 },
              { name: t('charts.jul'), income: 17000, expenses: 10500 },
              { name: t('charts.aug'), income: 13000, expenses: 8000 },
              { name: t('charts.sep'), income: 12000, expenses: 6500 },
              { name: t('charts.oct'), income: 12500, expenses: 7000 },
              { name: t('charts.nov'), income: 14000, expenses: 7500 },
              { name: t('charts.dec'), income: 16000, expenses: 9000 },
            ]}
            summary={[
              { name: t('charts.total'), value: '$170,800' },
              { name: t('charts.averageMonthly'), value: '$14,233' },
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
      <LayoutRow isGridColumnFull>
        <Title title={t('titles.recentTransactions')} />
        <LayoutBlock>
          <Table
            thead={[
              [
                { th: t('table.number') },
                { th: t('table.description') },
                { th: t('table.transactionId') },
                { th: t('table.type') },
                { th: t('table.card') },
                { th: t('table.date') },
                { th: t('table.amount') },
                { th: t('table.download') },
              ],
            ]}
            tbody={[
              [
                { td: 'Spotify Subscription' },
                { td: '#12548796' },
                { td: 'Shopping' },
                { td: '**** 1234' },
                { td: '28 Jan, 12.30 AM' },
                { td: '-$2,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Netflix Subscription' },
                { td: '#12548797' },
                { td: 'Entertainment' },
                { td: '**** 5678' },
                { td: '29 Jan, 10.15 AM' },
                { td: '-$1,200' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Amazon Purchase' },
                { td: '#12548798' },
                { td: 'Shopping' },
                { td: '**** 9101' },
                { td: '30 Jan, 03.45 PM' },
                { td: '+$5,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Google Cloud Services' },
                { td: '#12548799' },
                { td: 'Services' },
                { td: '**** 1121' },
                { td: '31 Jan, 09.00 AM' },
                { td: '+$3,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Uber Ride' },
                { td: '#12548800' },
                { td: 'Transport' },
                { td: '**** 3141' },
                { td: '1 Feb, 07.20 PM' },
                { td: '+$1,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Apple Music Subscription' },
                { td: '#12548801' },
                { td: 'Entertainment' },
                { td: '**** 5161' },
                { td: '2 Feb, 11.10 AM' },
                { td: '-$1,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Airbnb Booking' },
                { td: '#12548802' },
                { td: 'Travel' },
                { td: '**** 7181' },
                { td: '3 Feb, 02.30 PM' },
                { td: '-$7,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Starbucks Purchase' },
                { td: '#12548803' },
                { td: 'Food & Beverage' },
                { td: '**** 9202' },
                { td: '4 Feb, 08.45 AM' },
                { td: '-$500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Microsoft Office Subscription' },
                { td: '#12548804' },
                { td: 'Software' },
                { td: '**** 1222' },
                { td: '5 Feb, 01.00 PM' },
                { td: '-$4,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'YouTube Premium Subscription' },
                { td: '#12548805' },
                { td: 'Entertainment' },
                { td: '**** 3242' },
                { td: '6 Feb, 06.15 PM' },
                { td: '+$1,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Grocery Store Purchase' },
                { td: '#12548806' },
                { td: 'Food' },
                { td: '**** 5262' },
                { td: '7 Feb, 09.30 AM' },
                { td: '-$3,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Train Ticket Booking' },
                { td: '#12548807' },
                { td: 'Transport' },
                { td: '**** 7282' },
                { td: '8 Feb, 04.20 PM' },
                { td: '-$2,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Online Course Purchase' },
                { td: '#12548808' },
                { td: 'Education' },
                { td: '**** 9303' },
                { td: '9 Feb, 12.00 PM' },
                { td: '+$6,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Hotel Booking' },
                { td: '#12548809' },
                { td: 'Travel' },
                { td: '**** 1323' },
                { td: '10 Feb, 10.10 AM' },
                { td: '-$8,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Restaurant Bill' },
                { td: '#12548810' },
                { td: 'Food & Beverage' },
                { td: '**** 3344' },
                { td: '11 Feb, 07.45 PM' },
                { td: '-$1,200' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Flight Ticket Booking' },
                { td: '#12548811' },
                { td: 'Travel' },
                { td: '**** 5365' },
                { td: '12 Feb, 03.15 PM' },
                { td: '+$10,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Online Shopping' },
                { td: '#12548812' },
                { td: 'Shopping' },
                { td: '**** 7386' },
                { td: '13 Feb, 11.00 AM' },
                { td: '-$4,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Gym Membership' },
                { td: '#12548813' },
                { td: 'Health' },
                { td: '**** 9407' },
                { td: '14 Feb, 08.30 AM' },
                { td: '-$3,000' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Car Rental' },
                { td: '#12548814' },
                { td: 'Transport' },
                { td: '**** 1428' },
                { td: '15 Feb, 05.00 PM' },
                { td: '+$6,500' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
              [
                { td: 'Online Game Purchase' },
                { td: '#12548815' },
                { td: 'Entertainment' },
                { td: '**** 3449' },
                { td: '16 Feb, 02.10 PM' },
                { td: '-$1,800' },
                {
                  button: (
                    <Button
                      title={t('transactions.list.button.download')}
                      isOutline
                      href="/Placeholder-PDF.pdf"
                      download="Placeholder-PDF.pdf"
                    />
                  ),
                },
              ],
            ]}
          />
        </LayoutBlock>
      </LayoutRow>
    </>
  );
}

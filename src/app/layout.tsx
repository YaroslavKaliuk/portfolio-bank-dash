import '@styles/index.scss';
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

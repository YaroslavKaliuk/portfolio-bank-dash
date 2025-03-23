import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bank Dashboard',
  description: 'Bank Dashboard with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

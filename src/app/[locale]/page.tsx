'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentLocale = pathname.split('/')[1] || routing.defaultLocale;
    router.push(`/${currentLocale}/dashboard`);
  }, [router, pathname]);
}

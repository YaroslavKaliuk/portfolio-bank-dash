import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale: Locale = ((await requestLocale) as Locale) || routing.defaultLocale;
  return { locale, messages: (await import(`@locales/${locale}.json`)).default };
});

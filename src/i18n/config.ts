export const i18nConfig = {
  locales: ['en', 'es'] as const,
  defaultLocale: 'en' as const,
  middlewareLocales: ['en', 'es'],
};

export type Locale = (typeof i18nConfig)['locales'][number];

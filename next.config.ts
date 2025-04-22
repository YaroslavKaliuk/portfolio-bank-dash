import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
    prependData: `@use 'src/scss/breakpoints' as *; `,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@locales': path.resolve(__dirname, 'src/i18n/locales'),
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

type Lang = 'en' | 'es';

interface LanguageSwitcherProps {
  isAside?: boolean;
  isHeader?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isAside, isHeader }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState<Lang>((pathname.split('/')[1] as Lang) || 'en');

  const changeLanguage = (lang: Lang) => {
    const pathWithoutLocale = pathname.replace(`/${selectedLang}`, '');
    push(`/${lang}${pathWithoutLocale}`);
    setSelectedLang(lang);
  };

  const flags: Record<Lang, React.ReactNode> = {
    en: <Icons.IconFlagUs />,
    es: <Icons.IconFlagEs />,
  };

  return (
    <div
      className={cn(
        styles.languageSwitcher,
        isAside && styles.languageSwitcher__isAside,
        isHeader && styles.languageSwitcher__isHeader,
      )}
    >
      <button className={styles.languageSwitcher__selected}>{flags[selectedLang]}</button>
      <div className={styles.languageSwitcher__list}>
        {Object.keys(flags).map(
          (lang) =>
            lang !== selectedLang && (
              <button
                key={lang}
                className={styles.languageSwitcher__item}
                onClick={() => changeLanguage(lang as Lang)}
              >
                {flags[lang as Lang]}
              </button>
            ),
        )}
      </div>
    </div>
  );
};

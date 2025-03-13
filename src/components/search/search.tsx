'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

interface SearchProps {
  isAside?: boolean;
  isHeader?: boolean;
}

export const Search: React.FC<SearchProps> = ({ isAside, isHeader }) => {
  const t = useTranslations();

  return (
    <form
      className={cn(
        styles.search,
        isAside && styles.search__isAside,
        isHeader && styles.search__isHeader,
      )}
    >
      <input className={styles.search__input} type="search" placeholder={t('search.placeholder')} />
      <button className={styles.search__button}>
        <Icons.IconSearch />
      </button>
    </form>
  );
};

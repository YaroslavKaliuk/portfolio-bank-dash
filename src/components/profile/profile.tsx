'use client';

import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';
import * as Icons from '@/icons';

interface ProfileProps {
  className?: string;
}

export const Profile: FC<ProfileProps> = ({ className }) => {
  const t = useTranslations();

  return (
    <div className={cn(styles.profile, className)}>
      <Icons.IconUser />
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__header}>
          <h3 className={styles.profile__title}>{t('profile.title')}</h3>
        </div>
        <div className={styles.profile__list}>
          <a href="#" className={styles.profile__item}>
            {t('profile.personalInfo')}
          </a>
          <a href="#" className={styles.profile__item}>
            {t('profile.security')}
          </a>
          <a href="#" className={styles.profile__item}>
            {t('profile.preferences')}
          </a>
        </div>
      </div>
    </div>
  );
};

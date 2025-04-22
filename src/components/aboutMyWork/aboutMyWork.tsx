'use client';

import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { Dialog } from '../dialog';
import * as Icons from '@/icons';
import { Button } from '../button';
import { useDialog } from '@/hooks';
import { useTranslations } from 'next-intl';

export const AboutMyWork: FC = () => {
  const aboutMyWork = useDialog('about-my-work');
  const t = useTranslations();

  return (
    <div className={cn(styles.aboutMyWork)}>
      <Dialog
        id="about-my-work"
        title={t('aboutMyWork.title')}
        footer={
          <Button
            title={t('aboutMyWork.button')}
            iconLeft={<Icons.IconLogoLinkedin />}
            href="https://www.linkedin.com/in/yaroslav-kaliuk/"
            target="_blank"
          />
        }
      >
        <ul>
          <li>
            <i>🚀</i>
            {t('aboutMyWork.list.template')}
          </li>
          <li>
            <i>🌈</i>
            {t('aboutMyWork.list.responsive')}
          </li>
          <li>
            <i>🖥️</i>
            {t('aboutMyWork.list.browser')}
          </li>
          <li>
            <i>💹</i>
            {t('aboutMyWork.list.graphics')}
          </li>
          <li>
            <i>🎠</i>
            {t('aboutMyWork.list.carousel')}
          </li>
          <li>
            <i>🧠</i>
            {t('aboutMyWork.list.components')}
          </li>
          <li>
            <i>🌍</i>
            {t('aboutMyWork.list.multilanguage')}
          </li>
          <li>
            <i>🎨</i>
            {t('aboutMyWork.list.darkLight')}
          </li>
          <li>
            <i>🧩</i>
            {t('aboutMyWork.list.scss')}
          </li>
          <li>
            <i>📈</i>
            {t('aboutMyWork.list.charts')}
          </li>
          <li>
            <i>🌀</i>
            {t('aboutMyWork.list.animations')}
          </li>
          <li>
            <i>📌</i>
            {t('aboutMyWork.list.table')}
          </li>
        </ul>
      </Dialog>
      <Button
        title={t('common.aboutMyWork')}
        iconLeft={<Icons.IconStars />}
        onClick={aboutMyWork.open}
      />
    </div>
  );
};

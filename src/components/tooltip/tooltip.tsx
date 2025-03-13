'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface TooltipProps {
  info: string;
  children: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ children, info }) => (
  <div className={cn(styles.tooltip)}>
    <output className={styles.tooltip__info} role="tooltip">
      {info}
    </output>
    {children}
  </div>
);

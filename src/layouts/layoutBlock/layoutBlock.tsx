'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutBlockProps {
  children?: ReactNode;
}

export const LayoutBlock: FC<LayoutBlockProps> = ({ children }) => {
  return <div className={cn(styles.layoutBlock)}>{children}</div>;
};

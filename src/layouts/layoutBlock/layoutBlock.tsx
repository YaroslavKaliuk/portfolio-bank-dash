'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutBlockProps {
  children?: ReactNode;
  isInlineSize?: boolean;
}

export const LayoutBlock: FC<LayoutBlockProps> = ({ children, isInlineSize }) => {
  return <div className={cn(styles.layoutBlock, isInlineSize && styles.layoutBlock__isInlineSize)}>{children}</div>;
};

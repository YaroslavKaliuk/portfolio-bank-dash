'use client';

import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface LayoutBoxProps {
  children?: ReactNode;
}

export const LayoutBox: FC<LayoutBoxProps> = ({ children }) => {
  return <div className={cn(styles.layoutBox)}>{children}</div>;
};

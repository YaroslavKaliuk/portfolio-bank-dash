'use client';
import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Item {
  title?: string;
  content?: string;
  isDisabled?: boolean;
}

export interface AccordionProps {
  items?: Item[];
}

export const Accordion: FC<AccordionProps> = ({ items, ...props }) => {
  return (
    <div className={cn(styles.accordion)}>
      {items?.map((item, index) => (
        <div className={styles.accordion__item} key={index}>
          <label className={styles.accordion__header}>
            <input
              type="checkbox"
              defaultChecked={false}
              disabled={item.isDisabled}
              {...props}
            />
            <span className={styles.accordion__title}>{item.title}</span>
            <span className={styles.accordion__icon}></span>
          </label>
          <div className={styles.accordion__main}>
            <div className={styles.accordion__content}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

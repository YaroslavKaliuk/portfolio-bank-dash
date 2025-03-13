import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface TabsItem
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  nav?: string;
  content?: any;
}

export interface TabsProps {
  tabs?: TabsItem[];
  name: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, name, ...props }) => {
  return (
    <div className={cn(styles.tabs)}>
      {tabs?.map((tabsInput, index) => (
        <input
          type="radio"
          id={`tabs__${tabsInput.nav}`}
          name={name}
          defaultChecked={tabsInput.defaultChecked}
          disabled={tabsInput.disabled}
          key={index}
          {...props}
        />
      ))}
      <div className={styles.tabs__nav}>
        {tabs?.map((tabsItem, index) => (
          <label
            className={styles.tabs__navItem}
            htmlFor={`tabs__${tabsItem.nav}`}
            key={index}
            role="button"
            tabIndex={0}
          >
            {tabsItem.nav}
          </label>
        ))}
      </div>
      <div className={styles.tabs__content}>
        {tabs?.map((tabsItem, index) => (
          <div className={styles.tabs__contentItem} key={index}>
            {tabsItem.content}
          </div>
        ))}
      </div>
    </div>
  );
};

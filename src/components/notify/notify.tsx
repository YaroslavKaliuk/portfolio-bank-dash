'use client';

import cn from 'classnames';
import styles from './styles.module.scss';

import { Toaster } from 'react-hot-toast';

export const Notify = () => {
  return (
    <div className={cn(styles.notify)}>
      <Toaster
        toastOptions={{
          className: 'notify__container',
        }}
      />
    </div>
  );
};

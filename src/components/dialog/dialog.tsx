'use client';

import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import * as Icons from '@/icons';

export interface DialogProps {
  id: string;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Dialog: FC<DialogProps> = ({ id, onClose, children, title, footer }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClick = (e: MouseEvent) => {
      if (e.target === d) {
        d.close();
        onClose?.();
      }
    };
    const handleClose = () => onClose?.();
    d.addEventListener('click', handleClick);
    d.addEventListener('close', handleClose);
    return () => {
      d.removeEventListener('click', handleClick);
      d.removeEventListener('close', handleClose);
    };
  }, [onClose]);

  return (
    <dialog className={cn(styles.dialog)} id={id} ref={ref} onClose={onClose}>
      <div className={styles.dialog__header}>
        {title && <h2 className={styles.dialog__title}>{title}</h2>}
        <button className={styles.dialog__close} type="button" onClick={() => ref.current?.close()}>
          <Icons.IconClose />
        </button>
      </div>
      <div className={styles.dialog__main}>{children}</div>
      {footer && <div className={styles.dialog__footer}>{footer}</div>}
    </dialog>
  );
};

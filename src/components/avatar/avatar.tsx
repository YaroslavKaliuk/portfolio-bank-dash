'use client';

import cn from 'classnames';
import { FC, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import * as Icons from '@/icons';
import { useTranslations } from 'next-intl';

export interface AvatarProps {
  isEditable?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ isEditable }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const [avatar, setAvatar] = useState('/user_1.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const Component = (!isEditable ? Link : 'div') as FC<{
    className?: string;
    href?: string;
    children?: React.ReactNode;
  }>;
  const props = !isEditable ? { href: `/${locale}/settings` } : {};

  return (
    <Component className={cn(styles.avatar, isEditable && styles.avatar__isEditable)} {...props}>
      <Image
        src={avatar}
        width={isEditable ? 176 : 64}
        height={isEditable ? 176 : 64}
        alt={t('common.avatar')}
      />
      {isEditable && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            <Icons.IconPen />
          </button>
        </>
      )}
    </Component>
  );
};

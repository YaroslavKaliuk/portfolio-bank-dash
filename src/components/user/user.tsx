'use client';

import { FC } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface UserProps {
  id: number;
  name?: string;
  post?: string;
}

export const Users: FC<{ users?: UserProps[] } & Partial<UserProps>> = ({
  users,
  id,
  name,
  post,
}) => {
  const t = useTranslations();

  return users ? (
    <div className={styles.usersList}>
      {users.map((user) => (
        <Users key={user.id} {...user} />
      ))}
    </div>
  ) : (
    <div className={styles.user}>
      <div className={styles.user__photo}>
        <Image src={`/user_${id}.jpg`} width={56} height={56} alt={name || t('common.unknown')} />
      </div>
      {name && <div className={styles.user__name}>{name}</div>}
      {post && <div className={styles.user__post}>{post}</div>}
    </div>
  );
};

{
  /* <Users id={1} /> */
}

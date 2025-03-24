'use client';

import cn from 'classnames';
import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './styles.module.scss';
import { Input } from '../input';
import { Title } from '../title';
import { Button } from '../button';
import * as Icons from '@/icons';

export interface QuickTransferProps {
  items: {
    text?: string;
    title?: string;
    image: React.ReactNode;
    isActive?: boolean;
  }[];
}

export const QuickTransfer: FC<QuickTransferProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [sentTo, setSentTo] = useState(items[1]?.title || '');

  const handleItemClick = (index: number, title?: string) => {
    setActiveIndex(index);
    setSentTo(title || '');
  };

  return (
    <div className={cn(styles.quickTransfer)}>
      <Swiper
        modules={[Navigation]}
        loop
        navigation
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                styles.quickTransfer__item,
                activeIndex === index && styles.quickTransfer__itemActive,
              )}
              onClick={() => handleItemClick(index, item.title)}
            >
              <div className={styles.quickTransfer__image}>{item.image}</div>
              <div className={styles.quickTransfer__title}>{item.title}</div>
              <div className={styles.quickTransfer__text}>{item.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <form className={styles.quickTransfer__form}>
        <Title title="Instant transfers to people you know" />
        <Input type="number" placeholder="$100" min={1} required />
        <Input type="text" placeholder="Sent to" value={sentTo} readOnly />
        <Input type="text" placeholder="Write a message..." />
        <Button title="Send" iconRight={<Icons.IconPaperPlane />} />
      </form>
    </div>
  );
};

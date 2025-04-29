'use client';

import cn from 'classnames';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import styles from './styles.module.scss';
import { Input } from '../input';
import { Title } from '../title';
import { Button } from '../button';
import * as Icons from '@/icons';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

export interface QuickTransferProps {
  items: {
    text?: string;
    title?: string;
    image: React.ReactNode;
    isActive?: boolean;
  }[];
}

export const QuickTransfer: FC<QuickTransferProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(4);
  const [sentTo, setSentTo] = useState(items[4]?.title || '');
  const t = useTranslations();
  const handleItemClick = (index: number, title?: string) => {
    setActiveIndex(index);
    setSentTo(title || '');
  };

  const notify = () =>
    toast(t('toast.yourTransferHasBeenSent'), {
      icon: '✅',
    });

  return (
    <div className={cn(styles.quickTransfer)}>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        navigation
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
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
      <form className={styles.quickTransfer__form} onSubmit={(e) => e.preventDefault()}>
        <Title title={t('titles.instantTransfers')} />
        <Input type="number" placeholder="$100" min={1} />
        <Input type="text" placeholder={t('quickTransfer.sentTo')} value={sentTo} readOnly />
        <Input type="text" placeholder={t('quickTransfer.writeMessage')} />
        <Button
          title={t('quickTransfer.button')}
          iconRight={<Icons.IconPaperPlane />}
          onClick={notify}
        />
      </form>
    </div>
  );
};

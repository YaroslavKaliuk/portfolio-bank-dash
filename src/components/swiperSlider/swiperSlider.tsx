'use client';

import cn from 'classnames';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import styles from './styles.module.scss';

export interface SwiperSliderProps {
  items: any[];
}

export const SwiperSlider: FC<SwiperSliderProps> = ({ items }) => {
  return (
    <div className={cn(styles.swiperSlider)}>
      <Swiper
        loop
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

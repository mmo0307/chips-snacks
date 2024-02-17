import React, { FC, ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper-cards.css';
import { classNames } from '@app/shared/lib/classNames/classNames';

interface SwiperCardsProps {
  className?: string;

  children?: ReactNode;
}

const SwiperCards: FC<SwiperCardsProps> = ({ className, children }) => (
  <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className={classNames('', {}, ['mySwiper', className])}
  >
    {children}
  </Swiper>
);

export { SwiperCards };

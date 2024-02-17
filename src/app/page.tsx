'use client';
import React from 'react';
import Image from 'next/image';

import { SwiperCards } from '@app/shared/ui/swiper/swiper-cards/swiper-cards';
import { Text } from '@app/shared/ui/Text/Text';
import { SwiperSlide } from 'swiper/react';

import BurgerMenu from '@app/shared/assets/icons/burger-menu.svg';
import Bag from '@app/shared/assets/icons/bag.svg';
import Arrow from '@app/shared/assets/icons/arrow.svg';

import styles from './page.module.scss';
import { classNames } from '@app/shared/lib/classNames/classNames';

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.headerWrapper}>
          <div className={styles.titleBlock}>
            <Text text='Order from the best of ' className={styles.title} />

            <Text text='snacks' className={styles.boldText} />
          </div>

          <span className={styles.menuButton}>
            <BurgerMenu />
          </span>
        </div>
      </header>

      <main>
        <div className={styles.titleBlockCollection}>
          <div className={styles.titleBlockText}>
            <Text title={'Choco'} className={styles.titleCollectionText} />{' '}
            <Text text={'Collections'} className={styles.textBoldCollection} />
          </div>

          <Arrow />
        </div>

        <SwiperCards
          className={classNames(styles.swiper, {}, [
            'w-[336px] h-[422px] relative rounded-[57.11px]'
          ])}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className='swiper-slide'
              // style={{
              //   background:
              //     '#' + Math.floor(Math.random() * 16777215).toString(16)
              // }}
            >
              <div className='w-[336px] h-[422px] relative bg-pink-100 rounded-[57.11px] overflow-hidden'>
                <Image
                  className='w-[320.28px] h-[377.27px] absolute inset-y-0 right-0 top-10 left-1/4 object-cover rounded-[57.11px] transform rotate-[30deg]'
                  //src='https://via.placeholder.com/320x377'
                  src={`https://picsum.photos/500/300?random=${index}`}
                  alt='Image'
                  width={320}
                  height={377}
                />
                <div className="w-[170px] left-[33px] top-[44px] absolute text-black text-4xl font-bold font-['Plus Jakarta Display'] capitalize leading-[37px]">
                  Good Source
                </div>
                <div className='w-[294px] h-[77px] left-[21px] top-[327px] absolute'>
                  <div className='w-[77px] h-[294px] left-[294px] top-0 absolute origin-top-left rotate-90 bg-gradient-to-b from-white to-white rounded-[44.33px] border border-white backdrop-blur-[28px]' />
                  <div className='w-[86.33px] h-[65.33px] left-[201.83px] top-[5.83px] absolute'>
                    <div className='w-[65.33px] h-[86.33px] left-[86.33px] top-0 absolute origin-top-left rotate-90 bg-zinc-900 rounded-[44.33px]' />
                    <div className='w-[26.83px] h-[26.83px] left-[30.33px] top-[19.25px] absolute'></div>
                  </div>
                  <div className="left-[39.67px] top-[25.63px] absolute text-black text-lg font-bold font-['Plus Jakarta Display'] capitalize">
                    $ 08.00
                  </div>
                </div>
                <div className='w-[105px] h-[37px] left-[29px] top-[134px] absolute'>
                  <div className='w-[105px] h-[37px] left-0 top-0 absolute bg-white rounded-[30px]' />
                  <div className="w-[74px] left-[16px] top-[8px] absolute text-black text-opacity-50 text-sm font-normal font-['Plus Jakarta Display'] capitalize">
                    Chocolates
                  </div>
                </div>
              </div>

              {/*<div>*/}
              {/*  <div className={styles.sliderTextBlock}>*/}
              {/*    <Text title={'Smiths Chips'} className={styles.sliderTitle} />*/}

              {/*    <span className={styles.sliderCategory}>Chips</span>*/}
              {/*  </div>*/}

              {/*  <Image*/}
              {/*    className='relative right-0 top-10 left-1/4 object-cover rounded-[57.11px] transform rotate-[30deg]'*/}
              {/*    src={`https://picsum.photos/500/300?random=${index}`}*/}
              {/*    alt={`Slide ${index}`}*/}
              {/*    width={320}*/}
              {/*    height={377}*/}
              {/*  />*/}

              {/*  <div className={styles.priceBlock}>*/}
              {/*    <Text text={'$ 08.00'} className={styles.price} />*/}

              {/*    <span className={styles.bag}>*/}
              {/*      <Bag />*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </SwiperSlide>
          ))}
        </SwiperCards>
      </main>
    </>
  );
}

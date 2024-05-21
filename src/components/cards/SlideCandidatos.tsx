'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './SlideCandidatos.css';
import CardPorcentagem from './porcentagem/card-porcentagem';
import MediaIdadeCard from './Idade/MediaIdade';

const SlideCandidatos = () => {
  return (
    <div className="container">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <CardPorcentagem />
        </SwiperSlide>
        <SwiperSlide>
          <MediaIdadeCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideCandidatos;

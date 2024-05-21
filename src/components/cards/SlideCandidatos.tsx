'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './SlideCandidatos.css';
import CardPorcentagem from './porcentagem/card-porcentagem';
import MediaIdadeCard from './Idade/MediaIdade';
import MediaGeneroCard from './genero/MediaGenero';
import MediaCidadesCard from './Cidade/MediaCidades';
import CardPorcentagemRejeicao from './rejeicao/card-porcentagem-rejeicao';

const SlideCandidatos = () => {
  const [ativo, setAtivo] = React.useState('');
  const [ativoGenero, setAtivoGenero] = React.useState('');
  const [ativoCidade, setAtivoCidade] = React.useState('');

  return (
    <div className="container">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 7000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true
        }}
        modules={[Pagination, Autoplay]}
        onSlideChange={(e) => {
          setAtivo('');
          setAtivoGenero('');
          setAtivoCidade('');
          if (e.activeIndex === 1) {
            setAtivo('Paulinho da refrigeração');
          }
          if (e.activeIndex === 2) {
            setAtivoGenero('Paulinho da refrigeração');
          }
          if (e.activeIndex === 3) {
            setAtivoCidade('Paulinho da refrigeração');
          }
        }}
      >
        <SwiperSlide>
          <CardPorcentagem />
        </SwiperSlide>
        <SwiperSlide>
          <MediaIdadeCard ativo={ativo} setAtivo={setAtivo} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaGeneroCard ativo={ativoGenero} setAtivo={setAtivoGenero} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCidadesCard ativo={ativoCidade} setAtivo={setAtivoCidade} />
        </SwiperSlide>
        <SwiperSlide>
          <CardPorcentagemRejeicao />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideCandidatos;

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
import {
  type VotosPorCidade,
  type VotosPorGenero,
  type VotosPorIdade
} from '@/app/page';

export interface votosCandidatos {
  nome: string;
  votos: number;
  porcentagem: string;
}

const SlideCandidatos = ({
  votos,
  votosTotais,
  votosPorIdade,
  votosPorGenero,
  votosPorCidade,
  votosPorRejeicoes
}: {
  votos: votosCandidatos[];
  votosTotais: number;
  votosPorIdade: VotosPorIdade[];
  votosPorGenero: VotosPorGenero[];
  votosPorCidade: VotosPorCidade[];
  votosPorRejeicoes: votosCandidatos[];
}) => {
  const [ativo, setAtivo] = React.useState('');
  const [ativoGenero, setAtivoGenero] = React.useState('');
  const [ativoCidade, setAtivoCidade] = React.useState('');
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: scrolled ? 25000 : 12000,
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
          <CardPorcentagem votos={votos} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaIdadeCard
            ativo={ativo}
            setAtivo={setAtivo}
            votosPorIdade={votosPorIdade}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MediaGeneroCard
            ativo={ativoGenero}
            setAtivo={setAtivoGenero}
            votosPorGenero={votosPorGenero}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCidadesCard
            ativo={ativoCidade}
            setAtivo={setAtivoCidade}
            votosPorCidade={votosPorCidade}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardPorcentagemRejeicao votos={votosPorRejeicoes} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideCandidatos;

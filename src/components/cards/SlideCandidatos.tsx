'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './style.module.css';

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
import Image from 'next/image';
import { getCookie } from '@/actions/getCookie';
import { setCookieVoted } from '@/actions/setCookie';

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
  const [voted, setVoted] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  async function GetVoto() {
    const vote = await getCookie({ nameCookie: 'voted' });

    console.log(vote);

    if (vote) {
      setVoted(true);
    }
  }
  async function GetShared() {
    const shared = await getCookie({ nameCookie: 'shared' });

    if (shared) {
      setShared(true);
    }
  }
  React.useEffect(() => {
    void GetVoto();
    void GetShared();
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
            setAtivo(votos[0].nome);
          }
          if (e.activeIndex === 2) {
            setAtivoGenero(votos[0].nome);
          }
          if (e.activeIndex === 3) {
            setAtivoCidade(votos[0].nome);
          }
        }}
      >
        {voted && shared ? (
          <>
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
            +
          </>
        ) : (
          <SwiperSlide key={'01254'}>
            {!voted && (
              <div className={`card ${styles.nao_votou}`}>
                <p>
                  Para ver a porcentagem dos candidatos
                  <br /> deixe o seu voto
                </p>
                <Image
                  className={styles.shake}
                  alt="Imagem de cadeado"
                  src={'/imagens/block.png'}
                  width={50}
                  height={50}
                />
              </div>
            )}
            {!shared && (
              <div className={`card ${styles.nao_votou}`}>
                <p>
                  Para ver a porcentagem dos candidatos
                  <br /> Compartilhe no Whatsapp
                </p>
                <Image
                  className={styles.shake}
                  alt="Imagem de cadeado"
                  src={'/imagens/whatsapp.svg'}
                  width={50}
                  height={50}
                />
                <button
                  className={styles.whatsappButton}
                  onClick={(e) => {
                    setTimeout(() => {
                      void setCookieVoted({
                        cookieName: 'shared',
                        cookieValue: 'true'
                      });
                      window.location.reload();
                    }, 3000);
                    if (navigator.share) {
                      navigator
                        .share({
                          title: 'Pesquisa Eleitoral',
                          text: 'Venha conferir e deixar o seu voto na pesquisa eleitoral.',
                          url: 'https://pesquisaeleitoralpadua.vercel.app'
                        })
                        .then(() => {
                          console.log('Compartilhamento realizado com sucesso');
                          setTimeout(() => {
                            void setCookieVoted({
                              cookieName: 'shared',
                              cookieValue: 'true'
                            });
                            window.location.reload();
                          }, 2000);
                        })
                        .catch((error) => {
                          console.log('Erro ao compartilhar:', error);
                        });
                    } else {
                      console.log(
                        'API de compartilhamento não suportada pelo navegador.'
                      );
                    }
                  }}
                >
                  Compartilhar
                </button>
              </div>
            )}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SlideCandidatos;

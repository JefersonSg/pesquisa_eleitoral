'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoCidades from '@/components/graficos/GraficoCidades';
import { type VotosPorCidade } from '@/app/page';

const MediaCidadesCandidatos = ({
  image,
  name,
  ativo,
  setAtivo,
  votosPorCidade
}: {
  image: string;
  name: string;
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosPorCidade: VotosPorCidade;
}) => {
  return (
    <div
      className={`${styles.candidato_container} ${ativo === name ? styles.ativo : ''}`}
    >
      <div
        className={styles.infos_candidato}
        onClick={() => {
          if (ativo === name) {
            setAtivo('');
          } else {
            setAtivo(name);
          }
        }}
      >
        <Image
          className={styles.foto_candidato}
          alt="imagem do candidato"
          src={image}
          width={42}
          height={42}
        />
        <div className={styles.infos}>
          <p className={styles.nome}>{name}</p>
          <p className={styles.media}></p>
        </div>
        <Image
          className={styles.seta}
          alt="seta"
          src={ativo === name ? 'seta-frente-branca.svg' : '/seta-frente.svg'}
          width={6}
          height={12}
        />
      </div>
      {ativo === name && (
        <div className={styles.informações_candidato}>
          <p className={styles.texto_title}>Votos por Cidade / Distrito</p>
          <GraficoCidades
            estatistica1={votosPorCidade.votosCidade['Santo Antônio de Pádua']}
            estatistica2={votosPorCidade.votosCidade.Baltazar}
            estatistica3={votosPorCidade.votosCidade.Campelo}
            estatistica4={votosPorCidade.votosCidade['Ibitiguaçu']}
            estatistica5={votosPorCidade.votosCidade['Monte Alegre']}
            estatistica6={votosPorCidade.votosCidade.Marangatu}
            estatistica7={votosPorCidade.votosCidade.Paraoquena}
            estatistica8={votosPorCidade.votosCidade['Santa Cruz']}
            estatistica9={votosPorCidade.votosCidade['São Pedro de Alcântara']}
          />
          <div className={styles.valores_votos}>
            <p className={styles.estatistica1}>
              Santo Antônio de Pádua
              <span>
                {votosPorCidade.votosCidade['Santo Antônio de Pádua']}
              </span>
            </p>
            <p className={styles.estatistica2}>
              Baltazar <span>{votosPorCidade.votosCidade.Baltazar}</span>
            </p>
            <p className={styles.estatistica3}>
              Campelo <span>{votosPorCidade.votosCidade.Campelo}</span>
            </p>
            <p className={styles.estatistica4}>
              Ibitiguaçu <span>{votosPorCidade.votosCidade['Ibitiguaçu']}</span>
            </p>
            <p className={styles.estatistica5}>
              Monte Alegre{' '}
              <span> {votosPorCidade.votosCidade['Monte Alegre']}</span>
            </p>
            <p className={styles.estatistica6}>
              Marangatu <span> {votosPorCidade.votosCidade.Marangatu}</span>
            </p>
            <p className={styles.estatistica7}>
              Paraoquena <span> {votosPorCidade.votosCidade.Paraoquena}</span>
            </p>
            <p className={styles.estatistica8}>
              Santa Cruz{' '}
              <span> {votosPorCidade.votosCidade['Santa Cruz']}</span>
            </p>
            <p className={styles.estatistica9}>
              São Pedro de Alcântara{' '}
              <span>
                {' '}
                {votosPorCidade.votosCidade['São Pedro de Alcântara']}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCidadesCandidatos;

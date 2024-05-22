'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoCidades from '@/components/graficos/GraficoCidades';

const MediaCidadesCandidatos = ({
  image,
  name,
  ativo,
  setAtivo
}: {
  image: string;
  name: string;
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
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
          <p className={styles.media}>28 anos</p>
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
          <GraficoCidades estatistica1={0} estatistica2={0} estatistica3={0} />
          <div className={styles.valores_votos}>
            <p className={styles.estatistica1}>
              Santo Antônio de Pádua <span>{200}</span>
            </p>
            <p className={styles.estatistica2}>
              Baltazar <span>{200}</span>
            </p>
            <p className={styles.estatistica3}>
              Campelo <span>{200}</span>
            </p>
            <p className={styles.estatistica4}>
              Ibitiguaçu <span>{200}</span>
            </p>
            <p className={styles.estatistica5}>
              Monte Alegre <span>{200}</span>
            </p>
            <p className={styles.estatistica5}>
              Marangatu <span>{200}</span>
            </p>
            <p className={styles.estatistica6}>
              Paraoquena <span>{200}</span>
            </p>
            <p className={styles.estatistica7}>
              Santa Cruz <span>{200}</span>
            </p>
            <p className={styles.estatistica8}>
              São Pedro de Alcântara <span>{200}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCidadesCandidatos;

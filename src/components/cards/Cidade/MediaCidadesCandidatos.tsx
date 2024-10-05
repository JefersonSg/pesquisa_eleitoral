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
            estatistica1={votosPorCidade.votosCidade.Palma}
            estatistica2={votosPorCidade.votosCidade.Itaperuçu}
            estatistica3={votosPorCidade.votosCidade.Cisneiros}
          />
          <div className={styles.valores_votos}>
            <p className={styles.estatistica1}>
              Palma
              <span>{votosPorCidade.votosCidade.Palma}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCidadesCandidatos;

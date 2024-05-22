'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoRosquinhaGenero from '@/components/graficos/GraficoRosquinhaGenero';

const MediaGeneroCandidatos = ({
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
          <p className={styles.texto_title}>Votos por gênero</p>
          <GraficoRosquinhaGenero
            estatistica1={0}
            estatistica2={0}
            estatistica3={0}
          />
          <div className={styles.valores_votos}>
            <p className={styles.estatistica1}>
              Homem <span>{200}</span>
            </p>
            <p className={styles.estatistica2}>
              Mulher <span>{200}</span>
            </p>
            <p className={styles.estatistica3}>
              Outros <span>{200}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGeneroCandidatos;

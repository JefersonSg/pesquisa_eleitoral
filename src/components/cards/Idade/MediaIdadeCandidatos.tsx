'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoRosquinha from '@/components/graficos/GraficoRosquinha';

const MediaIdadeCandidatos = ({
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
          <p className={styles.texto_title}>Média de idades</p>
          <GraficoRosquinha
            idade1={0}
            idade2={0}
            idade3={0}
            idade4={0}
            idade5={0}
          />
          <div className={styles.valores_votos}>
            <p className={styles.idade1}>
              16 a 24 anos <span>{200}</span>
            </p>
            <p className={styles.idade2}>
              25 a 34 anos <span>{200}</span>
            </p>
            <p className={styles.idade3}>
              35 a 44 anos <span>{200}</span>
            </p>
            <p className={styles.idade4}>
              45 a 59 anos <span>{200}</span>
            </p>
            <p className={styles.idade5}>
              60 ou mais <span>{200}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaIdadeCandidatos;

'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoRosquinha from '@/components/graficos/GraficoRosquinha';

const MediaIdadeCandidatos = ({
  image,
  name,
  ativo,
  setAtivo,
  votosIdade
}: {
  image: string;
  name: string;
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosIdade: {
    '16-24': number;
    '25-34': number;
    '35-44': number;
    '45-59': number;
    '60': number;
  };
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
          <p className={styles.texto_title}>Média de idades</p>
          <GraficoRosquinha
            idade1={votosIdade['16-24']}
            idade2={votosIdade['25-34']}
            idade3={votosIdade['35-44']}
            idade4={votosIdade['45-59']}
            idade5={votosIdade['60']}
          />
          <div className={styles.valores_votos}>
            <p className={styles.idade1}>
              16 a 24 anos <span>{votosIdade['16-24']}</span>
            </p>
            <p className={styles.idade2}>
              25 a 34 anos <span>{votosIdade['25-34']}</span>
            </p>
            <p className={styles.idade3}>
              35 a 44 anos <span>{votosIdade['35-44']}</span>
            </p>
            <p className={styles.idade4}>
              45 a 59 anos <span>{votosIdade['45-59']}</span>
            </p>
            <p className={styles.idade5}>
              60 ou mais <span>{votosIdade['60']}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaIdadeCandidatos;

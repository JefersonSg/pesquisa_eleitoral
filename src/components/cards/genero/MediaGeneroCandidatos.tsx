'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import Image from 'next/image';
import GraficoRosquinhaGenero from '@/components/graficos/GraficoRosquinhaGenero';
import { type VotosPorGenero } from '@/app/page';

const MediaGeneroCandidatos = ({
  image,
  name,
  ativo,
  setAtivo,
  votosPorGenero
}: {
  image: string;
  name: string;
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosPorGenero: VotosPorGenero;
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
          <p className={styles.texto_title}>Votos por gênero</p>
          <GraficoRosquinhaGenero
            estatistica1={votosPorGenero.votosGenero.homem}
            estatistica2={votosPorGenero.votosGenero.mulher}
            estatistica3={votosPorGenero.votosGenero.outros}
          />
          <div className={styles.valores_votos}>
            <p className={styles.estatistica1}>
              Homem <span>{votosPorGenero.votosGenero.homem}</span>
            </p>
            <p className={styles.estatistica2}>
              Mulher <span>{votosPorGenero.votosGenero.mulher}</span>
            </p>
            <p className={styles.estatistica3}>
              Outros <span>{votosPorGenero.votosGenero.outros}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGeneroCandidatos;

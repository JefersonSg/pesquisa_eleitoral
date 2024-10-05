'use client';

import React from 'react';
import MediaIdadeCandidatos from './MediaIdadeCandidatos';
import styles from './canditatosCard.module.css';
import { type VotosPorIdade } from '@/app/page';

const MediaIdadeCard = ({
  ativo,
  setAtivo,
  votosPorIdade
}: {
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosPorIdade: VotosPorIdade[];
}) => {
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Média de idade dos eleitores</h1>
      <div className={styles.candidatos_div}>
        {votosPorIdade?.map((candidato) => {
          return (
            <MediaIdadeCandidatos
              key={candidato.nome}
              ativo={ativo}
              votosIdade={candidato.votosIdade}
              setAtivo={setAtivo}
              image={`/candidatos/${candidato.nome}.jpg`}
              name={candidato.nome}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaIdadeCard;

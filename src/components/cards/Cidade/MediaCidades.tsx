'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import MediaCidadesCandidatos from './MediaCidadesCandidatos';
import { type VotosPorCidade } from '@/app/page';

const MediaCidadesCard = ({
  ativo,
  setAtivo,
  votosPorCidade
}: {
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosPorCidade: VotosPorCidade[];
}) => {
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Votos por localidade</h1>
      <div className={styles.candidatos_div}>
        {votosPorCidade?.map((candidato) => {
          return (
            <MediaCidadesCandidatos
              key={candidato.nome}
              ativo={ativo}
              setAtivo={setAtivo}
              votosPorCidade={candidato}
              image={`/candidatos/${candidato.nome}.png`}
              name={candidato.nome}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaCidadesCard;

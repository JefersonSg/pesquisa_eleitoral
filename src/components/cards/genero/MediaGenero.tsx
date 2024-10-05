'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import MediaGeneroCandidatos from './MediaGeneroCandidatos';
import { type VotosPorGenero } from '@/app/page';

const MediaGeneroCard = ({
  ativo,
  setAtivo,
  votosPorGenero
}: {
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  votosPorGenero: VotosPorGenero[];
}) => {
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Gênero dos eleitores</h1>
      <div className={styles.candidatos_div}>
        {votosPorGenero.map((candidato) => {
          return (
            <MediaGeneroCandidatos
              key={candidato.nome}
              ativo={ativo}
              setAtivo={setAtivo}
              votosPorGenero={candidato}
              image={`/candidatos/${candidato.nome}.jpg`}
              name={candidato.nome}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaGeneroCard;

'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import MediaCidadesCandidatos from './MediaCidadesCandidatos';

const MediaCidadesCard = ({
  ativo,
  setAtivo
}: {
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Votos por localidade</h1>
      <div className={styles.candidatos_div}>
        <MediaCidadesCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/paulinho.png"
          name="Paulinho da refrigeração"
        />
        <MediaCidadesCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/josias.png"
          name="Josias quintal"
        />
        <MediaCidadesCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/beto.png"
          name="Béto da farmacia"
        />
        <MediaCidadesCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/rogerio.png"
          name="Rogério Machado"
        />
        <MediaCidadesCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/leonardo.png"
          name="Leonardo da agricultura"
        />
      </div>
    </div>
  );
};

export default MediaCidadesCard;

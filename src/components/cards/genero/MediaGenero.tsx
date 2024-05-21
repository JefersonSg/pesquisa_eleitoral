'use client';

import React from 'react';
import styles from './canditatosCard.module.css';
import MediaGeneroCandidatos from './MediaGeneroCandidatos';

const MediaGeneroCard = ({
  ativo,
  setAtivo
}: {
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Gênero dos eleitores</h1>
      <div className={styles.candidatos_div}>
        <MediaGeneroCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/paulinho.png"
          name="Paulinho da refrigeração"
        />
        <MediaGeneroCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/josias.png"
          name="Josias quintal"
        />
        <MediaGeneroCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/beto.png"
          name="Béto da farmacia"
        />
        <MediaGeneroCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/rogerio.png"
          name="Rogério Machado"
        />
        <MediaGeneroCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/leonardo.png"
          name="Leonardo da agricultura"
        />
      </div>
    </div>
  );
};

export default MediaGeneroCard;

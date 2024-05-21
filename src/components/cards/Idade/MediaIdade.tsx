'use client';

import React from 'react';
import MediaIdadeCandidatos from './MediaIdadeCandidatos';
import styles from './canditatosCard.module.css';

const MediaIdadeCard = () => {
  const [ativo, setAtivo] = React.useState('');
  return (
    <div className={`card ${styles.margin}`}>
      <h1 className="cabecalho">Média de idade dos eleitores</h1>
      <div className={styles.candidatos_div}>
        <MediaIdadeCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/paulinho.png"
          name="Paulinho da refrigeração"
        />
        <MediaIdadeCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/josias.png"
          name="Josias quintal"
        />
        <MediaIdadeCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/beto.png"
          name="Béto da farmacia"
        />
        <MediaIdadeCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/rogerio.png"
          name="Rogério Machado"
        />
        <MediaIdadeCandidatos
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/leonardo.png"
          name="Leonardo da agricultura"
        />
      </div>
    </div>
  );
};

export default MediaIdadeCard;

'use client';

import React from 'react';
import CandidatosVoto from './candidatos_voto';
import styles from './canditatosvoto.module.css';

const Voto = () => {
  const [ativo, setAtivo] = React.useState('');
  return (
    <div className="card">
      <h1 className="cabecalho">
        Em quem você votaria se a eleição fosse hoje ?
      </h1>
      <div className={styles.candidatos_div}>
        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/paulinho.png"
          name="Paulinho da refrigeração"
        />
        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/beto.png"
          name="Béto da farmacia"
        />
        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/josias.png"
          name="Josias quintal"
        />
        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/leonardo.png"
          name="Leonardo da agricultura"
        />

        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/rogerio.png"
          name="Rogério Machado"
        />
        <CandidatosVoto
          ativo={ativo}
          setAtivo={setAtivo}
          image="/candidatos/nulo.png"
          name="Branco/Nulo"
        />
      </div>
    </div>
  );
};

export default Voto;

'use client';

import React from 'react';
import CandidatosVoto from './candidatos_voto';

const Voto = () => {
  const [ativo, setAtivo] = React.useState('');
  return (
    <div className="card">
      <h1 className="cabecalho">
        Em quem você votaria se a eleição fosse hoje ?
      </h1>
      <CandidatosVoto
        ativo={ativo}
        setAtivo={setAtivo}
        image="/candidatos/paulinho.png"
        name="Paulinho da refrigeração"
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
        image="/candidatos/beto.png"
        name="Béto da farmacia"
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
        image="/candidatos/leonardo.png"
        name="Leonardo da agricultura"
      />
    </div>
  );
};

export default Voto;

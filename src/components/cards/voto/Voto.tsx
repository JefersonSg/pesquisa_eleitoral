'use client';

import React from 'react';
import CandidatosVoto from './candidatos_voto';
import styles from './canditatosvoto.module.css';

export interface candidatos {
  id: string;
  nome: string;
}

const Voto = ({ candidatos }: { candidatos: candidatos[] }) => {
  const [ativo, setAtivo] = React.useState('');
  return (
    <div className="card">
      <h1 className="cabecalho">
        Em quem você votaria se a eleição fosse hoje ?
      </h1>
      <div className={styles.candidatos_div}>
        {candidatos.map((candidato) => {
          return (
            <CandidatosVoto
              key={candidato.id}
              ativo={ativo}
              candidatos={candidatos}
              setAtivo={setAtivo}
              image={`/candidatos/${candidato.nome}.png`}
              name={candidato.nome}
            />
          );
        })}

        <CandidatosVoto
          ativo={ativo}
          candidatos={candidatos}
          setAtivo={setAtivo}
          image="/candidatos/nulo.png"
          name="Branco/Nulo"
        />
      </div>
    </div>
  );
};

export default Voto;

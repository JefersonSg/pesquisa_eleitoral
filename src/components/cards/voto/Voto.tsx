'use client';

import React from 'react';
import CandidatosVoto from './candidatos_voto';
import styles from './canditatosvoto.module.css';
import { getCookie } from '@/actions/getCookie';
import Image from 'next/image';

export interface candidatos {
  id: string;
  nome: string;
}

const Voto = ({ candidatos }: { candidatos: candidatos[] }) => {
  const [voted, setVoted] = React.useState(false);

  async function GetVoto() {
    const vote = await getCookie({ nameCookie: 'voted' });

    console.log(vote);

    if (vote) {
      setVoted(true);
    }
  }

  React.useEffect(() => {
    void GetVoto();
  }, []);

  const [ativo, setAtivo] = React.useState('');
  return (
    <>
      {voted ? (
        <div className={`card ${styles.nao_votou}`}>
          <p>Você já votou</p>
          <Image
            className={styles.shake}
            alt="Imagem de cadeado"
            src={'/imagens/block.png'}
            width={50}
            height={50}
          />
        </div>
      ) : (
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
                  image={`/candidatos/${candidato.nome}.jpg`}
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
      )}
    </>
  );
};

export default Voto;

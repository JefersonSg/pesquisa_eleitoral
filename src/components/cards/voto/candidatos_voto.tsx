'use client';

import React from 'react';
import styles from './canditatosvoto.module.css';
import Image from 'next/image';
import Formulario from './form/Formulario';
import { type candidatos } from './Voto';

const CandidatosVoto = ({
  image,
  name,
  ativo,
  setAtivo,
  candidatos
}: {
  image: string;
  name: string;
  ativo: string;
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  candidatos: candidatos[];
}) => {
  return (
    <div
      className={`${styles.candidato_container} ${ativo === name ? styles.ativo : ''}`}
    >
      <div
        className={styles.infos_candidato}
        onClick={() => {
          if (ativo === name) {
            setAtivo('');
          } else {
            setAtivo(name);
          }
        }}
      >
        <Image
          className={styles.foto_candidato}
          alt="imagem do candidato"
          src={image}
          width={42}
          height={42}
        />
        <div className={styles.infos}>
          <p className={styles.nome}>{name}</p>
        </div>
        <Image
          className={styles.seta}
          alt="seta"
          src={ativo === name ? 'seta-frente-branca.svg' : '/seta-frente.svg'}
          width={6}
          height={12}
        />
      </div>
      {ativo === name && (
        <Formulario
          nomeVoto={name}
          setAtivo={setAtivo}
          candidatos={candidatos}
        />
      )}
    </div>
  );
};

export default CandidatosVoto;

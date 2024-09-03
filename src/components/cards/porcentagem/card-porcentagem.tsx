import { type votosCandidatos } from '../SlideCandidatos';
import PorcentagemCandidatos from './candidatos';
import React from 'react';

export default function CardPorcentagem({
  votos
}: {
  votos: votosCandidatos[];
}) {
  return (
    <main className={'card'}>
      <h1 className={'cabecalho'}>Parcial dos candidatos</h1>

      {votos.map((candidato) => {
        return (
          <PorcentagemCandidatos
            key={candidato.nome}
            image={`/candidatos/${candidato.nome}.png`}
            name={candidato.nome}
            percentage={candidato.porcentagem}
            votes={candidato.votos}
          />
        );
      })}
    </main>
  );
}

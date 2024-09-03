'use client';

import { useQuery } from '@tanstack/react-query';
import { type votosCandidatos } from '../SlideCandidatos';
import PorcentagemCandidatos from './candidatos';
import React from 'react';
import { getVotos } from '@/actions/prisma';

export default function CardPorcentagem({
  votos
}: {
  votos: votosCandidatos[];
}) {
  const { data } = useQuery<{
    resultado: votosCandidatos[];
    votosTotais: number;
  }>({
    queryKey: ['votos', votos.length],
    queryFn: async () => {
      return (await getVotos()) as unknown as {
        resultado: votosCandidatos[];
        votosTotais: number;
      };
    }
  });

  return (
    <main className={'card'}>
      <h1 className={'cabecalho'}>Parcial dos candidatos</h1>

      {data?.resultado.map((candidato) => {
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

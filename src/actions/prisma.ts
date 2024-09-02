'use server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function createNewVote({
  nomeVoto,
  cidade,
  idade,
  genero,
  rejeicao
}: {
  nomeVoto: string;
  cidade: string;
  idade: string;
  genero: string;
  rejeicao: string;
}) {
  try {
    const newVote = await prisma.votos.create({
      data: {
        cidade,
        genero,
        idade,
        rejeicao,
        voto: nomeVoto
      }
    });

    const alreadyVote = cookies().get('voted');

    if (alreadyVote) {
      return { jaVotou: 'Você já tem um voto computado' };
    }

    if (newVote) {
      cookies().set({ name: 'voted', value: 'true' });
      return { message: 'Seu voto foi confirmado' };
    }

    return { message: 'Erro ao computar o seu voto' };
  } catch (error) {
    console.log(error);

    return { error: 'Erro ao registrar o voto' };
  }
}

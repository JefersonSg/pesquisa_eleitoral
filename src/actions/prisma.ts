'use server';
import { type VotosPorCidade } from '@/app/page';
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
    const alreadyVote = cookies().get('voted');

    if (alreadyVote) {
      return { jaVotou: true };
    }

    const newVote = await prisma.votos.create({
      data: {
        cidade,
        genero,
        idade,
        rejeicao,
        voto: nomeVoto
      }
    });

    if (newVote) {
      cookies().set({ name: 'voted', value: 'true', httpOnly: true });
      return { message: 'Seu voto foi confirmado' };
    }

    return { message: 'Erro ao computar o seu voto' };
  } catch (error) {
    console.log(error);

    return { error: 'Erro ao registrar o voto' };
  }
}

export async function getVotos() {
  try {
    const votos = await prisma.votos.groupBy({
      by: ['voto'],
      _count: {
        _all: true
      }
    });
    const candidatos = await prisma.candidatos.findMany();

    const votosTotais = await prisma.votos.findMany();

    const result = candidatos.map((candidato) => {
      const votes = votos.filter((voto: any) => voto.voto === candidato.nome);

      return {
        nome: candidato.nome,
        votos: votes[0]?._count._all ?? 0,
        porcentagem: votes[0]?._count._all
          ? ((votes[0]?._count._all / votosTotais?.length) * 100).toFixed(2) ??
            '0'
          : '0'
      };
    });

    const resultadoOrdenado = result.sort((a, b) => b.votos - a.votos);

    return { resultado: resultadoOrdenado, votosTotais: votosTotais?.length };
  } catch (error) {
    console.log(error);
  }
}
export async function getRejeicoes() {
  try {
    const votos = await prisma.votos.groupBy({
      by: ['rejeicao'],
      _count: {
        _all: true
      }
    });
    const candidatos = await prisma.candidatos.findMany();

    const votosTotais = await prisma.votos.findMany();

    const result = candidatos.map((candidato) => {
      const votes = votos.filter(
        (voto: any) => voto.rejeicao === candidato.nome
      );

      return {
        nome: candidato.nome,
        votos: votes[0]?._count._all ?? 0,
        porcentagem: votes[0]?._count._all
          ? ((votes[0]?._count._all / votosTotais?.length) * 100).toFixed(2) ??
            '0'
          : '0'
      };
    });

    const resultadoOrdenado = result.sort((a, b) => b.votos - a.votos);

    return { resultadoRejeicao: resultadoOrdenado };
  } catch (error) {
    console.log(error);
  }
}

export async function getVotosByIdade() {
  try {
    const votos = await prisma.votos.groupBy({
      by: ['voto', 'idade'],
      _count: {
        _all: true
      }
    });

    const candidatos = await prisma.candidatos.findMany();

    const votosPorIdade = candidatos.map((candidato) => {
      const votosIdade = votos.filter((voto) => voto.voto === candidato.nome);

      const votosIdadeOrder: any = {
        '16:24': 0,
        '25-34': 0,
        '35-44': 0,
        '45-59': 0,
        '60': 0
      };

      if (votosIdade.length > 0) {
        votosIdade.forEach((voto) => {
          votosIdadeOrder[`${voto.idade}`] = voto._count._all;
        });
      }

      return {
        nome: candidato.nome,
        votosIdade: votosIdadeOrder
      };
    });

    return {
      votosPorIdade
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getVotosByGenero() {
  try {
    const votos = await prisma.votos.groupBy({
      by: ['voto', 'genero'],
      _count: {
        _all: true
      }
    });

    const candidatos = await prisma.candidatos.findMany();

    const votosPorGenero = candidatos.map((candidato) => {
      const votosGenero = votos.filter((voto) => voto.voto === candidato.nome);

      const votosGeneroOrder: any = {
        homem: 0,
        mulher: 0,
        outros: 0
      };

      if (votosGenero.length > 0) {
        votosGenero.forEach((voto) => {
          votosGeneroOrder[`${voto.genero}`] = voto._count._all;
        });
      }

      return {
        nome: candidato.nome,
        votosGenero: votosGeneroOrder
      };
    });

    return {
      votosPorGenero
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getVotosByCidade() {
  try {
    const votos = await prisma.votos.groupBy({
      by: ['voto', 'cidade'],
      _count: {
        _all: true
      }
    });

    const candidatos = await prisma.candidatos.findMany();

    const votosPorCidade: VotosPorCidade[] = candidatos.map((candidato) => {
      const votosCidade = votos.filter((voto) => voto.voto === candidato.nome);

      const votosCidadeOrder: any = {
        'Santo Antônio de Pádua': 0,
        Baltazar: 0,
        Campelo: 0,
        Ibitiguaçu: 0,
        'Monte Alegre': 0,
        Marangatu: 0,
        Paraoquena: 0,
        'Santa Cruz': 0,
        'São Pedro de Alcântara': 0
      };

      if (votosCidade.length > 0) {
        votosCidade.forEach((voto) => {
          votosCidadeOrder[`${voto.cidade}`] = voto._count._all;
        });
      }

      return {
        nome: candidato.nome,
        votosCidade: votosCidadeOrder
      };
    });

    return {
      votosPorCidade
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getCandidatos() {
  try {
    const candidatos = await prisma.candidatos.findMany();

    return candidatos;
  } catch (error) {
    console.log(error);
  }
}

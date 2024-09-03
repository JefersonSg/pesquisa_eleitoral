import styles from './page.module.css';
import Voto from '@/components/cards/voto/Voto';
import SlideCandidatos from '@/components/cards/SlideCandidatos';
import {
  getCandidatos,
  getRejeicoes,
  getVotos,
  getVotosByCidade,
  getVotosByGenero,
  getVotosByIdade
} from '@/actions/prisma';

export interface VotosPorIdade {
  nome: string;
  votosIdade: {
    '16-24': number;
    '25-34': number;
    '35-44': number;
    '45-59': number;
    '60': number;
  };
}

export interface VotosPorGenero {
  nome: string;
  votosGenero: {
    homem: number;
    mulher: number;
    outros: number;
  };
}

export interface VotosPorCidade {
  nome: string;
  votosCidade: {
    'Santo Antônio de Pádua': number;
    Baltazar: number;
    Campelo: number;
    Ibitiguaçu: number;
    'Monte Alegre': number;
    Marangatu: number;
    Paraoquena: number;
    'Santa Cruz': number;
    'São Pedro de Alcântara': number;
  };
}

export default async function Home() {
  const votosTotais = await getVotos();
  const votosTotaisRejeicoes = await getRejeicoes();
  const candidatos = await getCandidatos();
  const votosPorIdade = (await getVotosByIdade()) as unknown as {
    votosPorIdade: VotosPorIdade[];
  };
  const votosPorGenero = (await getVotosByGenero()) as unknown as {
    votosPorGenero: VotosPorGenero[];
  };
  const votosPorCidade = (await getVotosByCidade()) as unknown as {
    votosPorCidade: VotosPorCidade[];
  };

  console.log(votosTotaisRejeicoes?.resultadoRejeicao);
  return (
    <main className={styles.main}>
      <SlideCandidatos
        votos={votosTotais?.resultado ?? []}
        votosTotais={votosTotais?.votosTotais ?? 0}
        votosPorIdade={votosPorIdade?.votosPorIdade ?? []}
        votosPorGenero={votosPorGenero?.votosPorGenero ?? []}
        votosPorCidade={votosPorCidade?.votosPorCidade ?? []}
        votosPorRejeicoes={votosTotaisRejeicoes?.resultadoRejeicao ?? []}
      />
      <Voto candidatos={candidatos || []} />
    </main>
  );
}
